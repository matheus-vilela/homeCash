import styled from 'styled-components';

export const Container = styled.div`
  height: 50px;
  width: 100%;
  background-color: ${props => props.theme.colors.foreground_100};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  padding: 0 20px;
  z-index:2;
  box-shadow: 0px 0px 5px 0px ${props => props.theme.colors.shadow};
  .logo {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    img {
      height: 90%;
      border-radius: 50%;
    }
    h1 {
      color: ${props => props.theme.colors.title};
      margin-left: 10px;
      font-size: 1.6rem;

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
    justify-content: flex-end;
    height: 100%;
    width: 100px;
    img {
      height: 90%;
      border-radius: 50%;
    }
  }



`;
