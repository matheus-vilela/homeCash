import styled from 'styled-components';

export const Container = styled.div`
  height: 50px;
  width: 100%;
  background-color: ${props => props.theme.colors.foreground};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  bottom: 0;
  position: fixed;
  box-shadow: 0px 0px 5px 0px ${props => props.theme.colors.shadow};
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100px;
    img {
      height: 100%;
    }
  }
  .menu {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
      list-style: none;
      li {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        padding: 0 10px;
        cursor: pointer;
        :hover {
          background-color: ${props => props.theme.colors.primary_100};
        }
      }
    }
  }
  .user {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100px;
    img {
      height: 100%;
      border-radius: 50%;
    }
  }



`;
