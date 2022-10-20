import React from 'react';

import { Container } from './styles';

interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<Props> = ({children,onClick}) => {
  return(
    <Container onClick={onClick}>
      {children}
    </Container>
  );
}

export default Button;
