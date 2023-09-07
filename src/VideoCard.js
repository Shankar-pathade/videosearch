import React from 'react';

const VideoCard = ({ video }) => {
  return (
    <div className="card">
      <iframe
        src={video.videoUrl}
        title={video.query}
        frameborder="0"
        allowfullscreen
      ></iframe>
      <h3>{video.query}</h3>
      <div className="tags">
        {video.tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default VideoCard;