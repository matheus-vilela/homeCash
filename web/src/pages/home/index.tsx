import React, { useEffect } from 'react';
import {  Container, Content, Expense, ExpenseInfo, Expenses, FlagPaid, Name, Resume, Row, Title, User, Users } from './styles';
import Button from '../../components/button';
import { categories ,ICategories} from '../../constant';
import {format} from 'date-fns';
import SelectDate from '../../components/select-date';
import { formatCurrency } from '../../utils/format';
import Header from '../../components/header';
import { IExpenses, useExpenses } from '../../context/expenses';
import Modal from '../../components/modal';
import Categories from '../../components/categories';
import ModalPaid from '../../components/modal-paid';

interface IResume {
  total: number;
  paid: number;
  notPaid: number;
  totalPerCategory: {category:string;total: number}[];
}


const Home: React.FC = () => {
  const {expenses, loadData, users} = useExpenses();
  const [expenseList, setExpenseList] = React.useState<IExpenses[]>([]);
  const [showModal, setShowModal] = React.useState(false);
  const [showAlertPaid, setShowAlertPaid] = React.useState(false);
  const [resume, setResume] = React.useState<IResume>({} as IResume);
  const [selectedCategory, setSelectedCategory] = React.useState<ICategories>(categories[0]);
  const [selectedMonth, setSelectedMonth] = React.useState(format(new Date(), 'MM/yyyy'));
  const [expenseSelected, setExpenseSelected] = React.useState<IExpenses>({} as IExpenses);
  useEffect(() => {
    loadData()
  }, []);

  useEffect(() => {
    setExpenseList(expenses.filter(expense => format(Number(expense.expireat), 'MM/yyyy') === selectedMonth));
    setResume({
      total: expenses.filter(expense => format(Number(expense.expireat), 'MM/yyyy') === selectedMonth).reduce((acc, expense) => acc + expense.value, 0),
      paid: expenses.filter(expense => format(Number(expense.expireat), 'MM/yyyy') === selectedMonth && expense.paid).reduce((acc, expense) => acc + expense.value, 0),
      notPaid: expenses.filter(expense => format(Number(expense.expireat), 'MM/yyyy') === selectedMonth && !expense.paid).reduce((acc, expense) => acc + expense.value, 0),
      totalPerCategory: categories.filter(category => category.id !== '0').map(category => ({
        category: category.name,
        total: expenses.filter(expense => format(Number(expense.expireat), 'MM/yyyy') === selectedMonth && expense.category === category.name).reduce((acc, expense) => acc + expense.value, 0),
      }))
    })
  }, [expenses, selectedMonth]);

  function handleSelectCategory(category: ICategories) {
    setSelectedCategory(category);
  }

  function handleSelectMonth(month: string) {
    console.log('MONTH', month);
    setSelectedMonth(month);
  }

  return(
    <Container>
      <Header/>
      <Content>
        <div className='column'>
        <Title>Despesas</Title>
        <Row>

        <SelectDate onSelect={handleSelectMonth} selected={selectedMonth}/>
        <Button onClick={()=>setShowModal(true)}>Adicionar despesa</Button>
        </Row>
          <Resume>
            <h1>Resumo</h1>
            <p>Total das despesas do mês: {formatCurrency(Number(resume?.total))}</p>
            <p>Despesas pagas: {formatCurrency(Number(resume?.paid))}</p>
            <p>Despesas a vencer: {formatCurrency(Number(resume?.notPaid))}</p>
            <div className='separator'/>
            <h1>Por categoria</h1>
            {
              resume?.totalPerCategory?.map((category, index) => (
                <p key={category.category}>{category.category}: {formatCurrency(Number(category.total))}</p>
              ))
            }
          </Resume>
          <Title>Grupo familiar</Title>
          <Users>
            {
              users?.map((user) => (
                <User key={user.id}>
                  <Name>{user.name}</Name>
                  <p>{user.email}</p>
                </User>
              ))
            }
          </Users>
        </div>
        <div className='diviser'/>
        <div className='column'>
          <Categories selectedCategory={selectedCategory} handleSelectCategory={handleSelectCategory}/>
          <div className='separator'/>
          <Title>Despesas do mês</Title>
          <Expenses>
            {
              expenseList?.filter((despesa) => selectedCategory.id === '0' ? despesa : despesa.category === selectedCategory.name)
              .sort((a, b) => Number(a.expireat) - Number(b.expireat))
              .sort(despesa => despesa.paid ? 1 : -1)
              .map((despesa: IExpenses) => {
                const category = categories.find((category: ICategories) => category.name === despesa.category);
                const Icon = category?.icon;
                return (
                  <Expense key={despesa.id} onClick={()=>[setExpenseSelected(despesa), setShowAlertPaid(true)]}>
                    {!!category && <Icon color={category?.color} style={{marginLeft: 30, width: 60, height: 60, marginRight: 30}}/>}
                    <ExpenseInfo>
                      <span>Categoria: {despesa.category}</span>
                      <p>Descrição: {despesa.type}</p>
                    </ExpenseInfo>
                    <ExpenseInfo>
                      <span>Valor: {formatCurrency(despesa.value)}</span>
                      <p>Data de vencimento: {format(Number(despesa.expireat), 'dd/MM/yyyy')}</p>
                    </ExpenseInfo>
                        <FlagPaid color={despesa.paid ? '#87ff8c' : '#ded82f'}>
                        {!!despesa.paid ? (
                            <span>Pago</span>
                          ) : (
                            <span>A pagar</span>
                          )
                        }
                        </FlagPaid>
                  </Expense>
              )})
            }

          </Expenses>
        </div>
      </Content>
      {/* <Footer/> */}
      <Modal isOpen={showModal} setIsOpen={setShowModal}/>
      <ModalPaid isOpen={showAlertPaid} setIsOpen={setShowAlertPaid} expense={expenseSelected}/>

    </Container>
  );
}

export default Home;
