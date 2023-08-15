import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
function Header() {
  const navigate = useLocation();
  const [index, setIndex] = useState(0);

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
    <header className='max-w-6xl py-6 mx-auto flex justify-between items-center'>
      <div className='flex gap-20 items-center'>
        {/* LOGO */}
        <h1 className='text-3xl font-bold'>Lando</h1>
        {/* NAV */}
        <nav>
          <ul className='flex gap-10'>
            <Link to={'/'}>
              <li className={`${index === 0 ? 'text-[#3164f5]' : null}`}>
                Home
              </li>
            </Link>
            <Link to={'/pricing'}>
              <li className={`${index === 1 ? 'text-[#3164f5]' : null}`}>
                Pricing
              </li>
            </Link>
            <Link to={'/about-us'}>
              <li className={`${index === 2 ? 'text-[#3164f5]' : null}`}>
                About Us
              </li>
            </Link>
            <Link to={'/contact'}>
              <li className={`${index === 3 ? 'text-[#3164f5]' : null}`}>
                Contact
              </li>
            </Link>
          </ul>
        </nav>
      </div>
      {/* Login and Sign up features */}
      <div>
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
