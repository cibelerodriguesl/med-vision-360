import styled from "styled-components";
export const ContainerSignIn = styled.div`
  height: 110vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: var(
    --gradiente,
    linear-gradient(180deg, #010101 0%, #0e2739 100%)
  );

  > div {
    padding-top: 2rem;
    text-align: center;
    
  }
  section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 6rem;
    padding-bottom: 6rem;
    padding-left: 10%;
    padding-right: 10%;
    form {
      width: 50%;
    
      /* height: 100%; */
      > p {
        padding-bottom: 1rem;
        color: #fff;
        font-family: Roboto;
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
    }
    legend {
      color: white;
      font-size: 0px;
      
    }
    fieldset {
      display: flex;
      flex-direction: column;
      border: none;

      gap: 24px;
      justify-content: center;
      /* height: 100%; */
      > label {
        color: #fff;
        font-family: Roboto;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
      }
      button {
        height: 4rem;
        font-family: Roboto;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
    }
    p {
      color: #fff;
      font-family: Roboto;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      text-align: center;
      button {
        color: ${(props) => props.theme.orange};
        background-color: transparent;
        border: none;
        padding-left: 0.5rem;
        cursor: pointer;
      }
    }
  }
  @media (max-width: 1200px) {
    section {
      form {
        width: 100%;
      }
      justify-content: center;
      align-items: center;
      img {
        display: none;
      }
    }
  }
  @media (max-width: 424px) {
    section {
      padding: 1rem;
    }
  }
`;
export const ContainerSignInAluno = styled(ContainerSignIn)`
  section {
    flex-direction: row-reverse;
  }
`;
