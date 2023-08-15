import GetStarted from '../components/GetStarted';

function Pricing() {
  return (
    <div className='flex flex-col gap-6 my-20 items-center'>
      <h1 className='text-5xl text-center '>Pricing</h1>
      <p className='max-w-sm text-center mx-auto text-gray-600 mb-10'>
        Our pricing is not expensive , but it&apos;s not cheap either, it&apos;s
        exactly what it should be
      </p>

      <Cards />
      <CompareFeatures />
      <GetStarted />
    </div>
  );
}

export default Pricing;

function Cards() {
  return (
    <div className='grid grid-cols-3 w-[80%]'>
      <div className='bg-white p-10 rounded-2xl flex flex-col shadow-xl'>
        <span
          className='uppercase text-xs mb-5
        '
        >
          Basic
        </span>
        <div className='flex gap-1'>
          <span className='translate-y-2 font-bold'>$</span>
          <span className='text-6xl font-bold'>9</span>
          <span className=' self-end'>/month</span>
        </div>
        <p className='mt-2  mb-14 text-stone-600'>
          for individuals and small teams
        </p>
        <button className='px-4 py-2 border-black border rounded-xl '>
          Get Started With Basic
        </button>
      </div>
      <div className='bg-white relative shadow-xl p-10 rounded-2xl scale-110 flex flex-col'>
        <span className='bg-blue-500 text-xs text-white absolute top-5 rounded-2xl px-4 py-1 right-5'>
          Most Popular
        </span>
        <span className='uppercase text-xs mb-5'>Pro</span>
        <div className='flex gap-1'>
          <span className='translate-y-2 font-bold'>$</span>
          <span className='text-6xl font-bold'>19</span>
          <span className=' self-end'>/month</span>
        </div>
        <p className='mt-2  mb-14 text-stone-600'>
          for startups and growing businesses{' '}
        </p>
        <button className='px-4 py-2 border-blue-500 bg-blue-500 text-white border rounded-xl '>
          Get Started With Pro
        </button>
      </div>
      <div className='bg-white p-10 rounded-2xl flex flex-col shadow-xl'>
        <span className='uppercase text-xs mb-5'>Business</span>
        <div className='flex gap-1'>
          <span className='translate-y-2 font-bold'>$</span>
          <span className='text-6xl font-bold'>99</span>
          <span className=' self-end'>/month</span>
        </div>
        <p className='mt-2  mb-14 text-stone-600'>
          for Organizations with advanced needs
        </p>
        <button className='px-4 text-sm py-2 border-black border rounded-xl '>
          Get Started With Business
        </button>
      </div>
    </div>
  );
}

function CompareFeatures() {
  return (
    <div className='mt-10 w-[80%]'>
      <span className='text-2xl font-bold w-full text-start'>
        Compare Features
      </span>
      <div className=' grid grid-cols-3 text-2xl py-10 border-b border-gray-300'>
        <span>Basic</span>
        <span>Pro</span>
        <span>Business</span>
      </div>
      <div className=' grid grid-cols-3 text-gray-800 py-5 '>
        {/* BASIC */}
        <ul>
          <Feature>process analysis</Feature>
          <Feature>task Management</Feature>
          <Feature>time tracking </Feature>
          <Feature>performance metrics</Feature>
          <Feature>customizable reports</Feature>
          <Feature>email integration</Feature>
        </ul>

        {/* PRO */}
        <ul>
          <Feature>process analysis</Feature>
          <Feature>task Management</Feature>
          <Feature>time tracking </Feature>
          <Feature>performance metrics</Feature>
          <Feature>customizable reports</Feature>
          <Feature>email integration</Feature>
          <Feature>real-time collaboration</Feature>
          <Feature>automated workfows</Feature>
        </ul>

        {/* BUSINESS */}
        <ul>
          <Feature>process analysis</Feature>
          <Feature>task Management</Feature>
          <Feature>time tracking </Feature>
          <Feature>performance metrics</Feature>
          <Feature>customizable reports</Feature>
          <Feature>email integration</Feature>
          <Feature>real-time collaboration</Feature>
          <Feature>automated workfows</Feature>
          <Feature>analytics dashboard </Feature>
          <Feature>SLA management </Feature>
        </ul>
      </div>
    </div>
  );
}

function Feature({ children }) {
  return (
    <li className='flex gap-4 items-center my-3 capitalize'>
      <Checked /> {children}
    </li>
  );
}

function Checked() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='32'
      viewBox='0 0 24 24'
      className='text-blue-500'
    >
      <path
        fill='currentColor'
        d='M20 12a8 8 0 0 1-8 8a8 8 0 0 1-8-8a8 8 0 0 1 8-8c.76 0 1.5.11 2.2.31l1.57-1.57A9.822 9.822 0 0 0 12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10M7.91 10.08L6.5 11.5L11 16L21 6l-1.41-1.42L11 13.17l-3.09-3.09Z'
      />
    </svg>
  );
}
