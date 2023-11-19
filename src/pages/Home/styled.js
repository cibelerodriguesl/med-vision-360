import styled from "styled-components";

export const Container = styled.div`
  background: var(
    --gradiente,
    linear-gradient(180deg, #010101 0%, #0e2739 100%)
  );
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
   @media(max-width: 1265px)  {
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
`;
