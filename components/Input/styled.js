import styled from "styled-components";

export const ContainerLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: #fff;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  width: 100%;
  input {
    width: 100%;
    height: 4rem;
    border: 2px solid ${(props) => props.theme.orange};
    color: #999;
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    border-radius: 8px;
    padding-left: 0.5rem;
  }
`;
