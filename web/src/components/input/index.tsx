import React from 'react';
import {FiMail} from 'react-icons/fi';

import { Container, Label, TextInput } from './styles';

interface Props {
  label: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  security?: 'password' | 'none';
  Icon?: any;
}

const Input: React.FC<Props> = ({label, placeholder,value,onChange,security = 'none', Icon = FiMail}) => {


  return(
    <Container>
      <Label>{label || 'Teste'}</Label>
      <TextInput>
        <Icon size={20} color="#666360" />
        <input
          placeholder={placeholder || 'Teste'}
          value={value}
          onChange={onChange}
          security={security}
        />
      </TextInput>
    </Container>
  );
}

export default Input;
