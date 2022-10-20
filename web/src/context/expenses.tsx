import React, {
  createContext, useCallback, useState, useContext, Dispatch, SetStateAction,
} from 'react';
import { ContextProps } from '.';
import { IDespesas } from '../mock';
import { getAllExpenses, getAllUsers, getLogin, ILogin, putUser } from '../services/database';
import { AuthState, useAuth } from './auth';
// import { signIn } from '../services/api';


export interface IExpenses {
  id: string;
  value: number;
  category: string;
  type: string;
  createdat: string;
  expireat: string;
  residenceid: string;
  paid: boolean;
  description: string;

  // Path: src/pages/despesas/index.tsx
}

export type ExpensesContextData ={
  expenses: IExpenses[];
  loadData: ()=> Promise<void>;
  users: AuthState[];
}

export const ExpensesContext = createContext<ExpensesContextData>(
  {} as ExpensesContextData,
);

export const ExpensesProvider: React.FC<ContextProps> = ({ children }) => {
  const {user} = useAuth()
  const [expenses, setExpenses] = useState<IExpenses[]>([]);
  const [users, setUsers] = useState<AuthState[]>([]);

  const loadData = async () => {
    try{
      const usersList = await getAllUsers(user.residence);
      const expenseList = await getAllExpenses(user.residence);
      setExpenses(expenseList);
      setUsers(usersList);
    } catch (err) {
        alert('Não foi possível carregar as despesas');
        console.log(err);
    }
  };

  const createExpense = async (data: IDespesas) => {
    try{

    } catch (err) {
        alert('Não foi possível carregar as despesas');
        console.log(err);
    }
  };

  return (
    <ExpensesContext.Provider value={{loadData, expenses,users}}>
      {children}
    </ExpensesContext.Provider>
  );
};

export function useExpenses(): ExpensesContextData {
  const context = useContext(ExpensesContext);

  if (!context) {
    throw new Error('useExpenses must be used within an ExpensesProvider');
  }

  return context;
}
