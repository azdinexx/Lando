import img from '../assets/hero.png';

function Hero() {
  return (
    <>
      <div className='px-4  md:px-0 grid min-h-screen grid-cols-1 md:grid-cols-2 grid-rows-1 '>
        {/* Call To Action */}
        <div className='flex justify-center flex-col'>
          <span className='text-stone-400 py-4'>FREE 30 DAYS TRIAL</span>
          <h1 className='text-7xl capitalize py-4'>
            the best way to showcase your project.
          </h1>
          <p className='py-4 font-thin text-stone-600'>
            here you can put a short description about your project
          </p>
          <div className='py-4 flex gap-10 '>
            <button className=' rounded-xl font-semibold px-8 py-3 bg-[#3164f5] border border-[#3164f5] text-white'>
              try it for free
            </button>
            <button className=' rounded-xl font-semibold px-8 py-3 border border-black  '>
              see how it works
            </button>
          </div>
        </div>

        {/* Image */}
        <div className='hidden md:flex items-center justify-center '>
          <img src={img} alt='' width={430} />
        </div>
      </div>
      <div className='mb-20'>
        <p className='max-w-sm mx-auto text-center font-thin text-2xl '>
          trusted by individuals and teams at the world&apos;s best companies
        </p>
        <div className='flex gap-8 justify-center py-5 '>
          <span className='text-3xl font-bold text-stone-400  '>logo</span>
          <span className='text-3xl font-bold text-stone-400  '>logo</span>
          <span className='text-3xl font-bold text-stone-400  '>logo</span>
          <span className='text-3xl font-bold text-stone-400  '>logo</span>
        </div>
      </div>
    </>
  );
}

export default Hero;
