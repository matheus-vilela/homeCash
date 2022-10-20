import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import dark from '../theme/dark';
import { AuthProvider } from './auth';
import { ExpensesProvider } from './expenses';

export type ContextProps = {
  children: ReactNode
}

const AppProvider: React.FC<ContextProps> = ({ children }) => (
  <ThemeProvider theme={dark}>
    <AuthProvider>
      <ExpensesProvider>
        {children}
      </ExpensesProvider>
    </AuthProvider>
  </ThemeProvider>
);

export default AppProvider;
