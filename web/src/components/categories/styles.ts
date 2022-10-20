import styled from 'styled-components';

interface Props {
  color?: string;
  selected?: boolean;
}
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 5px;

`;
export const Title = styled.h2`
  font-size: 1rem;
  font-weight: 500;
  color: ${props => props.theme.colors.title};
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  /* flex-wrap: wrap; */
  width: 100%;
  overflow-x: overlay;
  background-color: ${props => props.theme.colors.background};
  padding-bottom: 10px;
  padding-left:5px;
  ::-webkit-scrollbar {
    display: flex;
    height: 10px;
    background-color: red ;
    color: #000;
    background-color: ${props => props.theme.colors.foreground}80;
  }
`;

export const Category = styled.div<Props>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background-color: ${props => props.selected ? (props.color + '99') : (props.color + '50')};
    box-shadow: 0px 0px 5px 0px ${props => props.theme.colors.shadow};
    border: ${props=> props.selected ? 1 : 0}px solid ${props => props.color};
    border-radius: 5px;
    margin: 10px 20px 10px 0;
    min-width: 100px;
    height: 120px;
    color: ${props => props.color};
    text-align: center;
    font-size: 10px;
    cursor: pointer;
    :hover {
      background-color: ${props => props.selected ? (props.color + '99') :props.color + '70'};
    }
  `;
