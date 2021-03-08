import React from 'react';
import movies from '../utils/movies';

const Sidebar = ({ setCurrentVideo }) => {
  const handleClick = src => {
    setCurrentVideo(src);
  };
  return movies.map(({ title, thumb, sources }) => (
    <img
      style={{ cursor: 'pointer' }}
      key={title}
      width='100px'
      src={thumb}
      alt={title}
      data-url={sources}
      onClick={() => handleClick(sources)}
    />
  ));
};

export default Sidebar;
