import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: ${props => props.theme.colors.background};
  width: 100vw;

`;

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  h1 {
    font-size: 32px;
    color: ${props => props.theme.colors.title};
    padding:0;
    margin:0;
  }
  h2 {
    font-size: 24px;
    color: ${props => props.theme.colors.title};
    padding:0;
    margin:0;
  }
  p {
    font-size: 16px;
    color: ${props => props.theme.colors.text};
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 70vh;
  .column {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background-color: ${props => props.theme.colors.background};
    border-radius: 5px;
  }
  .diviser {
    display: flex;
    width: 2px;
    height: 80%;
    background-color: ${props => props.theme.colors.text};
  }
`;


