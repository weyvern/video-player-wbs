import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav
      className='navbar navbar-expand-md navbar-dark bg-dark'
      aria-label='Fourth navbar example'
    >
      <div className='container'>
        <NavLink className='navbar-brand' to='/'>
          Video player
        </NavLink>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarsExample04'
          aria-controls='navbarsExample04'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarsExample04'>
          <ul className='navbar-nav ms-auto mb-2 mb-md-0'>
            <li className='nav-item'>
              <NavLink
                className='nav-link'
                to='/'
                exact
                activeClassName='active'
              >
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                className='nav-link'
                to='/try-it'
                exact
                activeClassName='active'
              >
                Try it
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                className='nav-link'
                to='/about'
                exact
                activeClassName='active'
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
