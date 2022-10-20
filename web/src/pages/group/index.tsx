import React from 'react';
import Input from '../../components/input';
import {FiUsers} from 'react-icons/fi';
import { Body, Container, Heading } from './styles';
import Button from '../../components/button';
import { useAuth } from '../../context/auth';
import Header from '../../components/header';

const Group: React.FC = () => {
  const {joinGroup} = useAuth();
  const [nameGroup, setNameGroup] = React.useState('');
  const [group, setGroup] = React.useState('');

  function handleCreateGroup() {
    if(nameGroup.trim() === '') {
      alert('Informe o nome do grupo');
      return;
    };
    joinGroup(nameGroup, 'created');
  }

  function handleJoinGroup() {
    if(group.trim() === '') {
      alert('Insira um nome válido');
      return;
    };
    joinGroup(group, 'entered');
  }

  return(
    <Container>
      <Header/>
      <Heading>
        <h1>Você ainda não pertence a nenhum grupo familiar</h1>
        <p>Crie ou entre em algum grupo familiar, para começar a controlar suas despesas da casa</p>
      </Heading>
      <Body>
        <div className='column'>
          <Heading>
            <h2>Criar um novo grupo</h2>
          </Heading>
          <Input label="Nome do novo grupo" placeholder="Digite o nome do grupo"
            Icon={FiUsers}
            value={nameGroup} onChange={(event) => setNameGroup(event.target.value)}
          />
          <Button onClick={handleCreateGroup}>Criar grupo familiar</Button>
        </div>
        <div className='diviser'/>
        <div className='column'>
          <Heading>
            <h2>Entrar em um grupo</h2>
          </Heading>
          <Input label="Nome do grupo existente" placeholder="Digite o nome do grupo"
            Icon={FiUsers}
            value={group} onChange={(event) => setGroup(event.target.value)}
          />
          <Button onClick={handleJoinGroup}>Entrar no grupo familiar</Button>
        </div>
      </Body>
    </Container>
  );
}

export default Group;
