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
  padding-top: 3.5rem;
  padding-bottom: 3.5rem;
  padding-left: 10%;
  padding-right: 10%;
  display: flex;
  flex-wrap: wrap;  
  align-itens: center;
  gap: 1.5rem;
  justify-content: space-between;
  
`;
