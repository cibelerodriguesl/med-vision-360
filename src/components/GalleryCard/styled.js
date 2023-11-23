// Styled.js

import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-basis: 200px;
  overflow: hidden;
  text-align: left;
`;

export const ContainerVideo = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
`;

export const VideoFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border: none;
`;

export const CardContent = styled.div`
  padding: 10px;
`;

export const Title = styled.h3`
  margin: 0;
  color: white;
  font-size: 18px;
`;

export const InfoContainer = styled.div`
  display: flex;
  color: white;
  flex-direction: column;
  font-size: 14px;
  & > span {
    margin-bottom: 5px;
  }
`;
