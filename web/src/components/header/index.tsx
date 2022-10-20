import React from 'react';
import {FiLogOut, FiDollarSign,FiHome} from 'react-icons/fi';
import dark from '../../theme/dark';
import {useNavigate} from 'react-router-dom';

import { Container } from './styles';
import { useAuth } from '../../context/auth';

const Header: React.FC = () => {
  const {logout}= useAuth();
  const navigate = useNavigate();
  function handleLogout() {
    logout();
  }

  return (
    <Container>
      <div className="logo">
      <FiHome  color={dark.colors.title} size={25}/>
      <h1>HomeCash</h1>
      </div>
      <div className='user'>
        <FiLogOut color="#fff" size={25} onClick={()=>handleLogout()}/>
        {/* <img src="https://github.com/matheus-vilela.png" alt="User" /> */}
      </div>
    </Container>

  );
}

export default Header;
