function Testimonials() {
  return (
    <div className='min-h-screen flex  items-center justify-center '>
      <div className=' flex flex-col gap-10'>
        <span className='text-center text-3xl'>Testimonials</span>
        <p className='text-center text-stone-500'>
          People love what we do, and we want to let you know
        </p>
        <div className='flex flex-col md:flex-row items-center justify-center gap-10'>
          <Card
            quote={'I recommend Lando for any business looking for improvement'}
            name={'John Doe'}
            job={'CEO at Google'}
          />
          <Card
            center
            quote={'I recommend Lando for any business looking for improvement'}
            name={'John Doe'}
            job={'CEO at Google'}
          />
          <Card
            quote={'I recommend Lando for any business looking for improvement'}
            name={'John Doe'}
            job={'CEO at Google'}
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

function Card({ center = false, name, job, quote }) {
  return (
    <div
      className={`max-w-[20rem] text-xl bg-white px-6 text-stone-700 pb-6 flex flex-col items-center justify-center rounded-2xl ${
        center ? '-translate-y-4' : ''
      }`}
    >
      <p className='py-6 text-center font-bold '>&quot;{quote} &quot;</p>
      <Rating />
      <span className='text-sm'>{name}</span>
      <span className='text-xs text-gray-500'>{job}</span>
    </div>
  );
}

function Rating() {
  return (
    <div
      className='text-blue-500/80 flex gap-1
    '
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='20'
        height='20'
        viewBox='0 0 24 24'
      >
        <path
          fill='currentColor'
          d='m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z'
        />
      </svg>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='20'
        height='20'
        viewBox='0 0 24 24'
      >
        <path
          fill='currentColor'
          d='m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z'
        />
      </svg>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='20'
        height='20'
        viewBox='0 0 24 24'
      >
        <path
          fill='currentColor'
          d='m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z'
        />
      </svg>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='20'
        height='20'
        viewBox='0 0 24 24'
      >
        <path
          fill='currentColor'
          d='m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z'
        />
      </svg>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='20'
        height='20'
        viewBox='0 0 24 24'
      >
        <path
          fill='currentColor'
          d='m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z'
        />
      </svg>
    </div>
  );
}
