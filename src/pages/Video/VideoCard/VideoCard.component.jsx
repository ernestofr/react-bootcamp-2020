import React from 'react';
import './VideoCard.css';

const VideoCard = ({ image, title, description, channel, views, timestamp }) => {
  return (
    <div className="videocard">
      <img className="videocard__image" src={image} alt="" />
      <div className="videocard__info">
        {/* <Avatar */}
        {/*  className='videocard__avatar' */}
        {/*  alt={channel} */}
        {/*  src={channelImage} */}
        {/* /> */}
        <div className="videocard__text">
          <p className="title">
            <strong>{title}</strong>
          </p>
          <p>{description}</p>
          <p className="channel">
            <strong>{channel}</strong>
          </p>
          <p>
            {views} views | {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
