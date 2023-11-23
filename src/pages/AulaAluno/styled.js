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
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Centraliza o conteúdo horizontalmente */
  gap: 2rem;
  
`;
export const ContainerVideo = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
`;

export const ContainerCard = styled.section`
  padding-top: 3.5rem;
  padding-bottom: 3.5rem;
  display: flex;
  flex-wrap: wrap;  
  align-itens: center;
  gap: 1.5rem;
  justify-content: space-between;
  
`;