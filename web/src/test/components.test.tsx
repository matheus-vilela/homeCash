import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Categories from '../components/categories';
import { categories } from '../constant';
import AppProvider from '../context';
import Login from '../pages/login';
import dark from '../theme/dark';
import { formatCurrency, formatToNumber } from '../utils/format';


describe('Categories', () => {
  it('should render categories', () => {
    const selectedCategory = categories[0];
    render(
      <ThemeProvider theme={dark}>
        <Categories selectedCategory={selectedCategory} handleSelectCategory={()=>{}} />
      </ThemeProvider>
    );

    expect(screen.getByText('Luz')).toBeTruthy();
    expect(screen.getByText('Casa')).toBeTruthy();
    expect(screen.getByText('Aluguel')).toBeTruthy();

    expect(screen).toMatchSnapshot();
  });

  it('should select categorie', () => {
    const selectedCategory = categories[0];
    let newCategory:any = null ;
    render(
      <ThemeProvider theme={dark}>
        <Categories selectedCategory={selectedCategory} handleSelectCategory={(res)=> newCategory=res} />
      </ThemeProvider>
    );
    fireEvent.click(screen.getByText('Casa'));
    expect(newCategory.name === 'Casa').toBeTruthy();
  });

  it("should not show 'Todas as categorias'", () => {
    const selectedCategory = categories[0];
    render(
      <ThemeProvider theme={dark}>
        <Categories selectedCategory={selectedCategory} handleSelectCategory={(res)=> {}} all={false}/>
      </ThemeProvider>
    );
    expect(screen.queryByText('Todas as categorias')).not.toBeTruthy();
  });
});

describe('Login', () => {
  it('should navigation to signUp', () => {
    render(
      <BrowserRouter>
        <AppProvider>
            <Login  />
        </AppProvider>
      </BrowserRouter>
    );
    fireEvent.click(screen.getByText('Não possui conta? Crie uma agora!'));
    expect(screen.getByText('Cadastro')).toBeTruthy();
    expect(screen).toMatchSnapshot();
  });
  it('should navigation to login', () => {
    render(
      <BrowserRouter>
        <AppProvider>
            <Login  />
        </AppProvider>
      </BrowserRouter>
    );
    fireEvent.click(screen.getByText('Não possui conta? Crie uma agora!'));
    expect(screen.getByText('Cadastro')).toBeTruthy();
    fireEvent.click(screen.getByText('Voltar a tela de login'));
    expect(screen.getByText('Faça login e comece a usar!')).toBeTruthy();
    expect(screen).toMatchSnapshot();
  });
});

describe('Utils', () => {
  it('should format currency', () => {
    const value = formatCurrency(1000);
    expect(String(value) === '1.000,00').toBeTruthy();
  });
  it('should format to number', () => {
    const value = formatToNumber('R$ 100,00');
    expect(value).toBe(100);
  });
});