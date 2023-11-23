// styled.js

import styled from 'styled-components';

export const ContainerSectionCaptured = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 20px;
`;

export const Container = styled.div`
  width: 100%;
  margin: auto;
  text-align: center;
  padding: 20px;
  position: relative; /* Adicionando position:relative para Container */
`;

export const CaptureButton = styled.button`
  margin-top: 10px;
  padding: 10px;
  font-size: 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

export const CapturedImage = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-basis: 200px;
  overflow: hidden;
  text-align: left;
  gap:16px;

  h3 {
    margin-bottom: 10px;
    color: white;
  }

  img {
    max-width: 100%;
    height: auto;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-basis: 200px;
  overflow: hidden;
  text-align: left;
`;

export const RecordingIndicator = styled.div`
  position: absolute; /* Mudando de position: fixed para position: absolute */
  top: 32px;
  right: 32px;
  color: red;
  font-size: 18px;
  font-weight: bold;
`;
