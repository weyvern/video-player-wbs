import React, { useState } from 'react';
import VideoPlayer from './VideoPlayer';
import SideBar from './Sidebar';

const Showcase = () => {
  const [currentVideo, setCurrentVideo] = useState(
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4'
  );
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-md-8'>
          <VideoPlayer src={currentVideo} />
        </div>
        <div className='col-md-4'>
          <SideBar setCurrentVideo={setCurrentVideo} />
        </div>
      </div>
    </div>
  );
};

export default Showcase;
