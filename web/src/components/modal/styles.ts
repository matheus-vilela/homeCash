import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 999;
`;

export const Modal = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  z-index: 999;
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

