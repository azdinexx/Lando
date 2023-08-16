import img from '../assets/SolutionSection.png';

function SolutionSection() {
  return (
    <div className=' my-36  md:min-h-screen flex justify-center items-center relative'>
      <div className='hidden md:block absolute z-[1]  bg-white h-[24rem] w-[96%] bottom-[7.2rem]  rounded-2xl shadow-lg'></div>

      <div className='w-full bg-white rounded-2xl h-[24rem] grid md:grid-cols-2 grid-cols-1 grid-rows-1 shadow-xl z-10 '>
        <div className='flex flex-col gap-6 justify-center pl-10'>
          <h3 className='text-5xl capitalize max-w-xs '>
            introducing new solution
          </h3>
          <p className='max-w-xs'>
            join our community and experience the benefits today!
          </p>
          <button className=' rounded-xl font-semibold px-6 py-3 bg-[#3164f5] border border-[#3164f5] text-white w-fit'>
            try it for free
          </button>
        </div>
        <div className='relative   md:block'>
          <img
            src={img}
            alt=''
            className='absolute md:bottom-6 -bottom-6 -right-10 w-[18rem] md:w-auto '
          />
        </div>
      </div>
    </div>
  );
}

export default SolutionSection;
