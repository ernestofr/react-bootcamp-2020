import React from 'react';
import './VideoCards.css';
import VideoCard from '../VideoCard';

const VideoCards = ({ items }) => {
  return (
    <div className="recommendedvideos">
      <div className="recommendedvideos__videos">
        {items.map((item) => {
          return (
            <VideoCard
              key={item.videoId}
              title={item.title}
              description={item.description}
              image={item.image}
              views={item.views}
              timestamp={item.timestamp}
              channel={item.channel}
              channelImage={item.channelImage}
            />
          );
        })}
      </div>
    </div>
  );
};

export default VideoCards;
