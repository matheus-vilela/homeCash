import React, { useEffect } from 'react';
import Button from '../../components/button';
import Input from '../../components/input';
import {useNavigate}  from 'react-router-dom';
import { Container,Content, Form, Heading, LinkButton } from './styles';
import { getAllUsers, postUser } from '../../services/database';
import { useAuth } from '../../context/auth';

const Login: React.FC = () => {
  const {login} = useAuth();
  const [show, setShow] = React.useState('login');
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmpassword, setConfirmPassword] = React.useState('');
  const navigate = useNavigate();

  function handleSignIn() {
    if(email && password) {
      login({email, password});
    } else {
      alert('Preencha todos os campos');
    }
  }

  async function handleSignUp() {
    if(password !== confirmpassword) {
      alert('Senhas não conferem');
      return;
    }
    if(!email || !name || !password) {
      alert('Preencha todos os campos');
      return;
    }
    const user = await postUser(
      {
        name,
        email,
        password,
      }
    );
    if(user) {
      alert('Usuário cadastrado com sucesso');
      setShow('login');
    }
  }

  return (
    <Container>
      <Content>
        {show === 'login' ? (
          <>
            <Heading>
              <h1>Home Cash</h1>
              <p>Faça login e comece a usar!</p>
            </Heading>
            <Form>
              <Input label="Endereço de e-mail" placeholder="Digite seu e-mail"
                value={email} onChange={(event) => setEmail(event.target.value)}
                />
              <Input label="Sua senha" placeholder="Digite sua senha"
                value={password} onChange={(event) => setPassword(event.target.value)}
                />
              <Button onClick={()=>handleSignIn()}>
                <p>Entrar na plataforma</p>
              </Button>
              <LinkButton onClick={()=> setShow('signUp')}>Não possui conta? Crie uma agora!</LinkButton>
            </Form>
          </>
        ) : (
          <>
            <Heading>
              <h1>Cadastro</h1>
              <p>Preencha suas informações!</p>
            </Heading>
            <Form>
              <Input label="Nome" placeholder="Digite seu nome"
                value={name} onChange={(event) => setName(event.target.value)}
                />
              <Input label="Endereço de e-mail" placeholder="Digite seu e-mail"
                value={email} onChange={(event) => setEmail(event.target.value)}
                />
              <Input label="Sua senha" placeholder="Digite sua senha"
                value={password} onChange={(event) => setPassword(event.target.value)}
                />
              <Input label="Repita a senha" placeholder="Digite sua senha"
                value={confirmpassword} onChange={(event) => setConfirmPassword(event.target.value)}
                />
              <Button onClick={handleSignUp}>
                <p>Cadastrar</p>
              </Button>
              <LinkButton onClick={()=> setShow('login')}>Voltar a tela de login</LinkButton>
            </Form>
          </>
        )}
      </Content>

    </Container>
  );
}

export default Login;
