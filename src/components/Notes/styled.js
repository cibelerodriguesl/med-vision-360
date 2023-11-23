// styled.js

import styled from 'styled-components';

export const NoteListContainer = styled.div`
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  background-color: #f9f9f9;

  h2{
    margin-bottom: 5px;
    font-size: 32px;
  }
`;

export const NoteItem = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 24px 12px;
  border-radius: 8px;

  strong {
    display: block;
    margin-bottom: 5px;
    font-size: 24px;
  }

  p{
    margin: 0;
    font-size: 16px;
  }
`;

export const NoteInput = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  font-size: 14px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const NoteButton = styled.button`
  display: flex;
  align-items: center;
  background-color: #F25C05;
  color: white;
  padding: 8px;
  margin-bottom: 10px; /* Adicionando espaçamento inferior */
  border: none;
  border-radius: 4px;
  cursor: pointer;

  svg {
    margin-right: 5px;
  }
`;

export const RemoveButton = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 5px;
  cursor: pointer;
  border-radius: 4px;
`;