import React from 'react';
import movies from '../utils/movies';

const Sidebar = ({ setCurrentVideo }) => {
  return movies.map(({ title, thumb, sources }) => (
    <img
      style={{ cursor: 'pointer' }}
      key={title}
      width='100px'
      src={thumb}
      alt={title}
      data-url={sources}
      onClick={() => setCurrentVideo(sources)}
    />
  ));
};

export default Sidebar;
