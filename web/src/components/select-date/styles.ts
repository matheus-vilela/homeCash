import styled from 'styled-components';

export const Container = styled.div`

`;

export const Picker = styled.select`
margin-top: 10px;
  max-height: 300px;
  overflow-y: scroll;
  background-color: ${props => props.theme.colors.foreground};
  width: 250px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 5px;
  padding-left: 10px;
  font-size: 14px;
  margin-right: 60px;
  color: ${props => props.theme.colors.title};
  :hover {
    border: 1px solid ${props => props.theme.colors.primary_100};
  }
  select{
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

export const Option = styled.option`

  `;
