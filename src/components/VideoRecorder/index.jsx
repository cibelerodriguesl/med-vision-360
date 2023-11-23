// WebcamCapture.jsx

import React, { useRef, useState, useCallback } from 'react';
import Webcam from 'react-webcam';
import {
  ContainerSectionCaptured,
  Container,
  CaptureButton,
  CapturedImage,
  RecordingIndicator,
} from './styled';

const VideoRecorder = () => {
  const webcamRef = useRef(null);
  const [capturedImages, setCapturedImages] = useState([]);
  const [isRecording, setIsRecording] = useState(false);
  const [captureCount, setCaptureCount] = useState(1);
  const [showCapturedImage, setShowCapturedImage] = useState(false);

  const capture = useCallback(() => {
    setIsRecording(true);
    setShowCapturedImage(false);

    const imageSrc = webcamRef.current.getScreenshot();
    const imageName = `Aula${captureCount}`;

    setCapturedImages((prevImages) => [
      ...prevImages,
      { name: imageName, src: imageSrc },
    ]);
    setCaptureCount((prevCount) => prevCount + 1);

    // Após 3 segundos, exibe a imagem capturada
    setTimeout(() => {
      setIsRecording(false);
      setShowCapturedImage(true);
    }, 3000); // 3000 milliseconds = 3 seconds
  }, [webcamRef, captureCount]);

  return (
    <Container>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        style={{
          width: '100%',
          height: '100%',
          border: isRecording ? '2px solid red' : 'none',
        }}
      />
      {isRecording && <RecordingIndicator>REC</RecordingIndicator>}
      <CaptureButton onClick={capture} disabled={isRecording}>
        Capturar Foto
      </CaptureButton>
      {showCapturedImage && (
        <ContainerSectionCaptured>
          {capturedImages.map((image) => (
            <CapturedImage key={image.name}>
              <img src={image.src} alt={image.name} />
              <h3>{image.name}</h3>
            </CapturedImage>
          ))}
        </ContainerSectionCaptured>
      
      )}
    </Container>
  );
};

export default VideoRecorder;


