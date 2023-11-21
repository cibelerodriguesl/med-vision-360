import styled from 'styled-components';

export const Container = styled.button`
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  color: ${(props) =>
    props.primary ? props.theme.black : props.secondary ? props.theme.white : props.theme.white };
  background-color: ${(props) =>
    props.primary ? props.theme.white : props.secondary ? props.theme.orange : 'transparent'};
  border: solid 3px
    ${(props) =>
      props.primary
        ? 'white'
        : props.secondary
        ? 'transparent'
        : props.theme.white};

  &:hover{
     background-color: ${(props) =>
  props.primary ? 'transparent' : props.secondary ? props.theme.orange_hover : props.theme.white};
    color: ${(props) =>
    props.primary ? props.theme.white : props.secondary ? props.theme.white : props.theme.black};
  }

a {
    text-decoration: none;
    color: ${(props) =>
  props.primary ? props.theme.black : props.secondary ? props.theme.white : props.theme.white };
    height: 100%;
    width: 100%;
  }

`;

export const ContentLink = styled.div`
  

`
