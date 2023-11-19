import styled from "styled-components";

export const Container = styled.div`
width: 90%;
  background-color: rgb(18, 75, 129, 6%);
  padding: 2rem 1rem;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  div {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1rem;
    h1 {
      color: #fff;
      text-align: center;
      font-family: Roboto;
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      line-height: 32px; /* 133.333% */
    }
    p {
      color: #fff;
      font-family: Roboto;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 150%; /* 24px */
    }
  }
`;
