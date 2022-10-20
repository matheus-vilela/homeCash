import styled from 'styled-components';

export const Container = styled.button`
  background-color: ${props => props.theme.colors.primary_100};
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  padding: 0 10px;
  margin-top: 10px;
  border: 0px;
  color: ${props => props.theme.colors.black};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  :hover {
    background-color: ${props => props.theme.colors.primary_200};
  }

  :disabled {
    background-color: ${props => props.theme.colors.primary_200};
    cursor: not-allowed;
  }

  :active {
    background-color: ${props => props.theme.colors.primary_300};
  }

`;
