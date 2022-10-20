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

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  h1 {
    font-size: 24px;
    color: ${props => props.theme.colors.title};
    padding:0;
    margin:0;
    line-height: 24px;
  }
  p {
    font-size: 14px;
    color: ${props => props.theme.colors.text};
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-width: 300px;
  max-width: 400px;
  padding: 20px;
  background-color: ${props => props.theme.colors.background};
  border-radius: 5px;
`;

export const LinkButton = styled.div`
  font-size: 14px;
  color: ${props => props.theme.colors.primary_100};
  margin-top: 10px;
  text-decoration: underline;
  cursor: pointer;
  :hover {
    color: ${props => props.theme.colors.primary_200};
  }
`;

