import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import VideoCards from './VideoCards';

const videoItems = require('./youtube-videos-mock.json');

const VideoSection = styled.section`
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  background-color: #f9f9f9;
  padding: 30px 0;
  font-size: 40px;
  text-align: center;
`;

const VideoPage = () => {
  const [videoCards, setVideoCards] = useState([]);

  function formatDate(date) {
    const d = new Date(date);
    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
    const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    return `${da}-${mo}-${ye}`;
  }

  useEffect(() => {
    const newVideoCards = [];

    videoItems.items.forEach((video) => {
      const { videoId } = video.id;
      const { snippet } = video;
      const channelImage = video.snippet.thumbnails.medium.url;

      const { title } = snippet;
      const { description } = snippet;
      const image = snippet.thumbnails.medium.url;
      const views = Math.floor(Math.random() * 10000);
      const timestamp = formatDate(snippet.publishedAt);
      const channel = snippet.channelTitle;

      newVideoCards.push({
        videoId,
        image,
        title,
        description,
        channel,
        views,
        timestamp,
        channelImage,
      });
    });

    setVideoCards(newVideoCards);
  }, []);

  return (
    <VideoSection>
      <Title>Mini Challenge 1</Title>
      <VideoCards items={videoCards} />
    </VideoSection>
  );
};

export default VideoPage;
