import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 10000,
});

export const getAllUsers = async (residenceId:string) => {
  console.log('RESIDENCE ID', residenceId);
  const response = await api.get('/users/'+residenceId);
  return response.data;
}

export const getAllExpenses = async (residenceId:string) => {
  const response = await api.get('/expenses/'+residenceId);
  return response.data;
}


export interface IPostUser {
  name: string;
  email: string;
  password: string;
}

export const postUser = async ({name, password, email}: IPostUser) => {
  try {
    const response = await api.post('/users',{
      name,
      password,
      email,
    });
    return response.data;
  } catch (error) {
    alert('Houve um erro! Por favor, verifique os dados informados.');
    console.log(error);
  }
}

export interface ILogin {
  email: string;
  password: string;
}

export const getLogin = async ({password, email}: ILogin) => {
  const response = await api.get(`/users/${email}/${password}`);
  return response.data;
}

export interface IPutUser {
  email: string;
  residence: string;
  type: string;
}

export const putUser = async ({email, residence, type}: IPutUser) => {
  const response = await api.put('/users', {
    residence,
    type,
    email,
  });
  return response.data;
}

export interface ICreateExpense {
  value: number;
  category: string;
  createdAt: string;
  expireAt: string;
  residenceId: string;
  paid: boolean;
  description: string;
}

export const createExpenses = async (data: ICreateExpense) => {
  const response = await api.post('/expenses', {...data});
  console.log(response.data, 'EXPENSES');
  return response.data;
}
export const updateExpenses = async (paid:boolean, id:string) => {
  const response = await api.put('/expenses/'+id, {paid});
  console.log(response.data, 'EXPENSES');
  return response.data;
}
