import React, {
  createContext, useCallback, useState, useContext, Dispatch, SetStateAction,
} from 'react';
import { ContextProps } from '.';
import { getLogin, ILogin, putUser } from '../services/database';
// import { signIn } from '../services/api';

export type AuthState = {
  id: string;
  name: string;
  email: string;
  residence: string;
}

export type SignInCredentials = {
  cpf: string;
  password: string;
}
export type AuthContextData ={
  user: AuthState;
  login: ({ email, password }: ILogin) => Promise<void>;
  logout: () => void;
  joinGroup: (residence: string, type:string)=> Promise<void>;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC<ContextProps> = ({ children }) => {
  const [user, setUser] = useState<AuthState>(() => {
    const data = sessionStorage.getItem('@home:user');
    if (data) {
      return JSON.parse(data);
    }
    return {} as AuthState;
  });

  const login = async ({ email, password }: ILogin) => {
    try{
      const res = await getLogin({ email, password });
      console.log(res);
      if (res) {
        setUser(res);
        sessionStorage.setItem('@home:user', JSON.stringify(res));
      } else {
      }

    } catch (err) {
        alert('Usuário ou senha inválidos');
        console.log(err);
      }


  };

  const joinGroup = async (residence: string, type: string) => {
    try{
      const join = await putUser({ email: user.email, residence, type });
      if (join) {
        setUser({
          ...user,
          residence,
        });
        sessionStorage.setItem('@home:user', JSON.stringify({
          ...user,
          residence: residence
        }));
      }
    } catch (err) {
      if(type === 'created'){
        alert('Erro ao criar grupo');
      } else {
        alert('Erro ao entrar no grupo');
      }
      console.log(err);
    }

  }

  const logout = () => {
    sessionStorage.removeItem('@home:user');
    setUser({} as AuthState);
  };

  return (
    <AuthContext.Provider value={{user, login, logout,joinGroup}}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
