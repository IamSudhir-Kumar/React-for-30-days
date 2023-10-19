import React from 'react';
import './VideoBackground.css';
import Video from '../assets/5.mp4'

function VideoBackground() {
  return (
    <div className="video-background">
      <video autoPlay loop muted>
        <source src={Video} type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoBackground;
