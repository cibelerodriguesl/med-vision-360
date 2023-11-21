import styled from "styled-components";

export const Container = styled.div`
  background: var(
    --gradiente,
    linear-gradient(180deg, #010101 0%, #0e2739 100%)
  );
  > h2 {
    text-align: center;
    color: ${(props) => props.theme.white};
    font-weight: bold;
    font-size: 32px;
  }
`;

export const ContainerSection = styled.section`
  padding-top: 6rem;
  padding-bottom: 6rem;
  padding-left: 10%;
  padding-right: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  article {
    display: flex;
    align-items: start;
    flex-direction: column;
    gap: 2rem;
    width: 50%;
    img {
      width: 100%;
    }
    p,
    h1 {
      color: white;
    }

    h1 {
      text-align: center;
      font-family: Roboto;
      font-size: 40px;
      font-style: normal;
      font-weight: 700;
      line-height: 120%; /* 48px */
    }
    p {
      font-family: Roboto;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 150%; /* 24px */
    }
  }
  @media (max-width: 1265px) {
    flex-wrap: wrap;
    img {
      width: 100%;
    }
    article {
      width: 100%;
    }
  }
`;
export const ChildContainerSection = styled(ContainerSection)`
  flex-direction: row-reverse;
  /* div {
    box-shadow: none;
    background-color: transparent;
  } */
`;

export const ContainerServices = styled.section`
  display: flex;
  justify-content: space-between;
  padding-top: 6rem;
  padding-bottom: 6rem;
  padding-left: 10%;
  padding-right: 10%;
  gap: 22px;
  @media(max-width: 900px){
     flex-wrap: wrap;
     align-items: center;
     justify-content: center;
  }
`;

export const ContainerDeveloper = styled.section`
  display: flex;
  justify-content: space-between;
  padding-top: 6rem;
  padding-bottom: 6rem;
  padding-left: 10%;
  padding-right: 10%;
  gap: 22px;
  div {
    padding: 2.18rem 2rem;
    div {
      gap: 36px;
      h3 {
        display: flex;
        width: 100%;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 0.5rem;
        div {
          gap: 1rem;
          padding: 0px;
          flex-direction: row;
          align-items: center;
        }
      }
    }
      @media(max-width: 900px){
    padding: 0.5rem;
  }
  }
    @media(max-width: 900px){
     flex-wrap: wrap;
     align-items: center;
     justify-content: center;
  }
`;
