import React from 'react';
import Button from '../button';
import Input from '../input';
import {FiCalendar, FiDollarSign, FiEdit3} from 'react-icons/fi';
import { Container, Content, ContentButtons,  Heading } from './styles';
import Categories from '../categories';
import { ICategories } from '../../constant';
import { IExpenses, useExpenses } from '../../context/expenses';
import { useAuth } from '../../context/auth';
import { createExpenses, getAllExpenses, ICreateExpense, updateExpenses } from '../../services/database';
import { parse } from 'date-fns/esm';

interface Props {
  isOpen: boolean;
  setIsOpen: (key: boolean) => void;
  expense: IExpenses;
}

const ModalPaid: React.FC<Props> = ({ isOpen, setIsOpen,expense}) => {
  const {loadData} = useExpenses();

  async function handleSave(){
    await updateExpenses(true, expense.id);
    alert('Despesa paga com sucesso');
    loadData();
    setIsOpen(false);
  }

  if(!isOpen) return null;

  return(
    <Container >
      <Content>
        <Heading>
          <h1>A despesa foi paga?</h1>
        </Heading>
        <ContentButtons>
          <Button onClick={() =>setIsOpen(false) }>Não</Button>
          <Button onClick={() =>handleSave() }>Sim</Button>
        </ContentButtons>
      </Content>
    </Container>
  );
}

export default ModalPaid;
