import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10%;
  gap: 32px;

  form {
    display: flex;
    flex-direction: row;
    gap: 32px;

    @media (max-width: 768px) {
      flex-direction: column; /* Alteração para empilhar os inputs em telas menores */
    }
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 20px;

  input {
    width: 100%;
  }
`;

export const UpdateButton = styled.button`
  background-color: ${(props) => props.theme.orange};
  color: #fff;
  font-size: 20px;
  margin: 0 25%;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;