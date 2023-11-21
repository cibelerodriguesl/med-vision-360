import styled from "styled-components";
import bg_mask from "../../assets/bg_mask.png";
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 25rem;
  height: 18.75rem;
  background-image: url(${bg_mask});
  opacity: 6;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow: 4px 8px 16px 0px rgba(0, 0, 0, 0.25);
  border-radius: 12px;

  div {
    width: 266px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    h4 {
      color: #fff;
      text-align: center;
      font-family: Roboto;
      font-size: 26px;
      font-style: normal;
      font-weight: 500;
      line-height: 32px; /* 123.077% */
    }

    p {
      color: #fff;
      text-align: center;
      font-family: Roboto;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 125% */
    }
  }
`;
