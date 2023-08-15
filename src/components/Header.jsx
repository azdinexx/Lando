function Header() {
  return (
    <header className='max-w-6xl py-6 mx-auto flex justify-between items-center'>
      <div className='flex gap-20 items-center'>
        {/* LOGO */}
        <h1 className='text-2xl font-bold'>Lando</h1>
        {/* NAV */}
        <nav>
          <ul className='flex gap-10'>
            <li className='text-[#3164f5]'>Home</li>
            <li>Pricing</li>
            <li>About Us</li>
            <li>Contact</li>
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
