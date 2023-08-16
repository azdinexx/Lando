import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
function Header() {
  const navigate = useLocation();
  const [index, setIndex] = useState(0);
  const [isMenuOpen, setMenu] = useState(false);

  useEffect(() => {
    switch (navigate.pathname) {
      case '/':
        setIndex(0);
        break;
      case '/pricing':
        setIndex(1);
        break;
      case '/about-us':
        setIndex(2);
        break;
      case '/contact':
        setIndex(3);
        break;
      default:
        setIndex(0);
        break;
    }
  }, [navigate]);

  return (
    <header className='relative px-4 md:px-0 md:max-w-6xl py-6 mx-auto flex justify-between items-center'>
      <div className='flex gap-20 items-center'>
        {/* LOGO */}
        <div className='flex gap-2'>
          <MenuSvg setMenu={setMenu} isMenuOpen={isMenuOpen} />
          <Link to={'/'}>
            <h1 className='text-3xl font-bold'>Lando</h1>
          </Link>
        </div>
        {/* NAV */}
        <nav
          className={`${
            isMenuOpen
              ? 'bg-white px-6 py-3 absolute top-20 rounded-lg shadow-2xl'
              : 'hidden'
          }  md:block `}
        >
          <ul
            className={`${
              isMenuOpen ? 'flex-col' : null
            } flex  gap-5 md:gap-10`}
          >
            <NavItem index={index} order={0} to={'/'}>
              Home
            </NavItem>
            <NavItem index={index} order={1} to={'/pricing'}>
              Pricing
            </NavItem>
            <NavItem index={index} order={2} to={'/about-us'}>
              About Us
            </NavItem>
            <NavItem index={index} order={3} to={'/contact'}>
              Contact
            </NavItem>
          </ul>
        </nav>
      </div>
      {/* Login and Sign up features */}
      <div className='flex gap-4'>
        <button className='px-5 py-2 text-[#3164f5] -white rounded-md '>
          Log In
        </button>
        <button className='px-5 py-2 bg-[#3164f5] text-white rounded-md '>
          Sign Up
        </button>
      </div>
    </header>
  );
}

export default Header;

function NavItem({ to, index, order, children }) {
  return (
    <Link to={to}>
      <li
        className={`${
          index === order ? 'text-[#3164f5]  ' : null
        }          text-sm md:text-lg `}
      >
        {children}
      </li>
    </Link>
  );
}

function MenuSvg({ isMenuOpen, setMenu }) {
  return (
    <button className='block md:hidden' onClick={() => setMenu(!isMenuOpen)}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='32'
        height='32'
        viewBox='0 0 256 256'
      >
        <path
          fill='currentColor'
          d='M224 120v16a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8v-16a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8Zm-8 56H40a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h176a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8Zm0-128H40a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h176a8 8 0 0 0 8-8V56a8 8 0 0 0-8-8Z'
        />
      </svg>
    </button>
  );
}
