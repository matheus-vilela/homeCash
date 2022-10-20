import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 300px;
  max-width: 400px;
  width: 100%;
`;
export const Label = styled.h3`
  font-size: 14px;
  color: ${props => props.theme.colors.title};
  margin-bottom: 5px;
`;

export const TextInput = styled.div`
    background-color: ${props => props.theme.colors.foreground};
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-radius: 5px;
    padding-left: 10px;
    margin-bottom: 10px;
    :hover {
      border: 1px solid ${props => props.theme.colors.primary_100};
    }
    input{
      width: 100%;
      height: 38px;
      border: 0px solid ${props => props.theme.colors.placeholder};
      border-radius: 4px;
      padding: 0 10px;
      font-size: 14px;
      color: ${props => props.theme.colors.text};
      background-color: ${props => props.theme.colors.foreground};
    }

`;
