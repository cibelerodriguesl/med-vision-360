import styled from 'styled-components';

export const Container = styled.header`
  background-color: transparent;
  color: ${(props) => props.theme.white};
  padding-left: 10%;
  padding-right: 10%;
  padding-bottom: 1rem;
  padding-top: 2rem;
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.16px;
  }
`;

export const MenuMobile = styled.div`
  display: none;
  @media (max-width: 873px) {
    display: block;
  }
`;

export const ContainerMobile = styled.div`
  height: 100vh;
  width: 100%;
  z-index: 99;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  > ul {
    display: block;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    > li {
      list-style: none;
      width: 100%;
      text-align: center;
      padding: 0.5rem 1rem;
      cursor: pointer;
      border-radius: 8px;
      a {
        text-decoration: none;
        color: ${(props) => props.theme.white};
        button {
          background-color: transparent;
          color: ${(props) => props.theme.white};
          border: none;
          font-weight: bold;
          font-size: 16px;
        }
      }
      &:hover {
        border-radius: 8px;
        background-color: #0d2333;
      }
    }
  }
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const ContainerDesktop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    button {
      cursor: pointer;

      a {
        text-decoration: none;
      }
    }
  }
  > ul {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 1rem;
    li {
      cursor: pointer;
      a {
        text-decoration: none;
        color: ${(props) => props.theme.white};
      }
    }
    @media (max-width: 873px) {
      display: none;
    }
  }
  > div {
    @media (max-width: 873px) {
      display: none;
    }
  }
  @media (max-width: 873px) {
    width: auto;
  }
`;

export const NavLinkContainer = styled.ul`
  display: flex;
  gap: 1rem;

  li {
    list-style: none;
    text-align: center;
    cursor: pointer;

    a {
      text-decoration: none;
      color: ${(props) => props.theme.white};
      button {
        background-color: transparent;
        color: ${(props) => props.theme.white};
        border: none;
        font-weight: bold;
        font-size: 16px;
      }
    }

    &:hover {
      border-radius: 8px;
      background-color: #0d2333;
    }
  }
`;
