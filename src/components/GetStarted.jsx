import img from '../assets/getStarted.png';
function GetStarted() {
  return (
    <div className='bg-white px-20 grid grid-cols-2 grid-rows-1 my-36 rounded-2xl shadow-2xl '>
      <div className='py-10 flex flex-col gap-5'>
        <span className='text-6xl'>Get Started with Lando today</span>
        <p className='text-stone-600'>Start your processes today!</p>
        <button className='w-fit  rounded-xl font-semibold px-6 py-3 bg-[#3164f5] border border-[#3164f5] text-white'>
          Sign up now
        </button>
      </div>
      <div>
        <img src={img} alt='' />
      </div>
    </div>
  );
}

export default GetStarted;
