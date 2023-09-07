import React, { useState, useEffect } from 'react';
import Header from './Header';
import VideoCard from './VideoCard';
import './App.css'

function App() {
  const [videos, setVideos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const numResults = 10; 

  const fetchVideos = async () => {
    try {
      const response = await fetch(
        `https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?q=${searchQuery}&numResults=${numResults}`
      );
      const data = await response.json();
      setVideos(data);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, [searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="App">
      <Header handleSearch={handleSearch} />
      <div className="results">
        {videos.length > 0 && videos.map((video, index) => (
          <VideoCard key={index} video={video} />
        ))}
      </div>
    </div>
  );
}

export default App;