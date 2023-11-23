import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styled';

const GalleryCards = ({ title, videoUrl, professorName, videoDate }) => {
  return (
    <Styled.CardContainer>
      <Styled.ContainerVideo>
        <Styled.VideoFrame
          src={videoUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></Styled.VideoFrame>
      </Styled.ContainerVideo>
      <Styled.CardContent>
        <Styled.Title>{title}</Styled.Title>
        <Styled.InfoContainer>
          <span>{professorName}</span>
          <span>{videoDate}</span>
        </Styled.InfoContainer>
      </Styled.CardContent>
    </Styled.CardContainer>
  );
};

GalleryCards.propTypes = {
  title: PropTypes.string.isRequired,
  videoUrl: PropTypes.string.isRequired,
  professorName: PropTypes.string.isRequired,
  videoDate: PropTypes.string.isRequired,
};

export default GalleryCards;

