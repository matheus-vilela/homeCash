import React from 'react';
import Button from '../button';
import Input from '../input';
import {FiCalendar, FiDollarSign, FiEdit3} from 'react-icons/fi';
import { Container, Form, Heading, LinkButton } from './styles';
import Categories from '../categories';
import { ICategories } from '../../constant';
import { IExpenses, useExpenses } from '../../context/expenses';
import { useAuth } from '../../context/auth';
import { createExpenses, getAllExpenses, ICreateExpense } from '../../services/database';
import { parse } from 'date-fns/esm';

interface Props {
  isOpen: boolean;
  setIsOpen: (key: boolean) => void;
}

const Modal: React.FC<Props> = ({ isOpen, setIsOpen}) => {
  const {user} = useAuth();
  const {loadData} = useExpenses();
  const [description, setDescription] = React.useState('');
  const [value, setValue] = React.useState('');
  const [category, setCategory] = React.useState<ICategories>({} as ICategories);
  const [expireAt, setExpireAt] = React.useState('');

  async function handleSave() {
    if(description && value && category  && expireAt) {
      try {
        const data: ICreateExpense = {
          category: category.name,
          description,
          value: Number(value),
          createdAt: String(+new Date()),
          expireAt: String(parse(expireAt, 'dd/MM/yyyy', new Date()).getTime()),
          paid: false,
          residenceId: user.residence,
        };

        const create = await createExpenses(data);
        console.log('CREATE EXPENSE', create);
        if(create.id) {
          alert('Despesa criada com sucesso');
          loadData();
        }
      } catch (err) {
        alert('Não foi possível criar a despesa');
        console.log(err);
      }
    } else {
      alert('Preencha todos os campos');
    }
  }

  if(!isOpen) return null;

  return(
    <Container >
            <Form>
       <Heading>
              <h1>Cadastre uma despesa</h1>
              <p>Preencha todos os campos obrigatórios</p>
            </Heading>
              <Categories selectedCategory={category} handleSelectCategory={setCategory} all={false} />
              <Input label="Data de vencimento *" placeholder="DD / MM / AAAA"
              Icon={FiCalendar}
                value={expireAt} onChange={(event) => setExpireAt(event.target.value)}
                />
              <Input label="Valor *" placeholder="Digite o valor da despesa"
              Icon={FiDollarSign}

                value={value} onChange={(event) => setValue(event.target.value)}
                />
              <Input label="Descrição (opcional)" placeholder="Digite uma descrição"
              Icon={FiEdit3}
                value={description} onChange={(event) => setDescription(event.target.value)}
                />
              <Button onClick={()=>handleSave()}>
                <p>Cadastrar despesa</p>
              </Button>
              <LinkButton onClick={()=> setIsOpen(false)}>Voltar</LinkButton>
            </Form>
    </Container>
  );
}

export default Modal;
