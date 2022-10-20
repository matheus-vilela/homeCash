import styled from 'styled-components';

interface Props {
  color?: string;
  selected?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex:1;
  flex-direction: column;
  padding: 50px 0;
  scrollbar-color: #000 transparent;
  overflow: hidden;
  position: relative;
  /* background-color: aqua; */
  background-color: ${props => props.theme.colors.background};
  /* background-color: #ecf1f8; */
  ::-webkit-scrollbar {
    display: none;
  }
`;



export const Content = styled.div`
  display: flex;
  flex:1;
  overflow-y: scroll;
  background-color: ${props => props.theme.colors.background};
  width: 100vw;
  flex-wrap: wrap;
  position: relative;
  ::-webkit-scrollbar {
    display: none;
  }
  .column {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 20px;
    padding-bottom: 0;
    border-radius: 5px;
    min-width: 300px;
    flex:1;
    height: 100%;
  background-color: ${props => props.theme.colors.background};

    .separator {
      height: 2px;
      width: 100%;
      background-color: ${props => props.theme.colors.text};
      margin: 10px 0;
    }
  }
  .diviser {
    max-width: 2px;
    flex:1;
    background-color: ${props => props.theme.colors.text};
    margin: 20px 0;
  }

`;

export const Diviser = styled.div`
  width: 2px;
  height: 100%;
  background-color: ${props => props.theme.colors.text};
  margin: 0 10px;

`;


export const Resume = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 10px;
  width: 100%;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
  background-color: ${props => props.theme.colors.foreground};
  h1 {
    font-size: 1rem;
    font-weight: 500;
    color: ${props => props.theme.colors.title};
    margin-bottom: 10px;
  }
  p {
    font-size: 16px;
    color: ${props => props.theme.colors.text};
    margin-bottom: 5px;
  }
  .separator {
    height: 1px;
    width: 100%;
    background-color: ${props => props.theme.colors.text};
    margin: 10px 0;
  }
  .resume {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 20px;
  background-color: ${props => props.theme.colors.background};

    .column {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      padding: 20px;
      background-color: ${props => props.theme.colors.background};
      border-radius: 5px;
    }
  }


`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 20px 0;
  background-color: ${props => props.theme.colors.background};

  padding-top: 0px;
`;

export const Users = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  overflow-x: scroll;
  background: ${props => props.theme.colors.background} !important;
  padding-bottom: 10px;
  background-size : cover;
  flex:1;
  ::-webkit-scrollbar {
    display: flex;
    height: 10px;
    background-color: red ;
    color: #000;
  background-color: ${props => props.theme.colors.foreground}80;

  }
`;

export const User = styled.div<Props>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background-color: ${props => props.theme.colors.foreground};
    box-shadow: 0px 0px 5px 0px ${props => props.theme.colors.shadow};
    border-radius: 5px;
    margin: 10px 0;
    margin-right: 10px;
    min-width: 150px;
    max-width: 150px;
    height: 60px;
    color: ${props => props.theme.colors.text};
    text-align: center;
    font-size: 10px;
    cursor: pointer;
`;

export const Title = styled.h2`
  font-size: 1rem;
  font-weight: 500;
  color: ${props => props.theme.colors.title};
`;

export const Name = styled.h2`
  font-size: 1rem;
  font-weight: 500;
  color: ${props => props.theme.colors.title};
`;

export const Categories = styled.div`
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

export const Expenses = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 10px;
  padding: 0 5px;
  width: 100%;
  .expense {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border-radius: 4px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    background-color: ${props => props.theme.colors.foreground};
    .column {
      display: flex;
      flex-direction: column;
      background-color: aqua;
      span {
        margin-top:0;
        padding-top: 0;
        font-size: 24px;
        color: ${props => props.theme.colors.title};
        background-color: beige;
      }
      p {
        font-size: 16px;
        margin-top:0;
        padding-top: 0;
        color: ${props => props.theme.colors.text};
      }
    }
  }
`;

export const Expense = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-width: 100%;
  height: 80px;
  background-color: ${props => props.theme.colors.foreground};
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
  margin: 5px 0;
  border-radius: 5px;
  position: relative;

`;

export const FlagPaid = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 20px;
  background-color: ${props => props.color};
  border-radius: 5px;
  position:absolute;
  top:0px;
  right:0;
  `;

export const ExpenseInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 10px;
  span {
    font-size: 16px;
    color: ${props => props.theme.colors.title};
  }
  p {
    font-size: 12px;
    color: ${props => props.theme.colors.text};
  }
`;
