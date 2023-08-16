import img from '../assets/steps.png';

function Steps() {
  return (
    <div className='md:min-h-screen my-36 relative flex justify-center items-center'>
      <div className='absolute z-[1]  bg-blue-400 h-screen w-[96%] -bottom-5  rounded-2xl shadow-xl'></div>

      <div className=' z-10 bg-white shadow-2xl flex flex-col md:flex-row md:p-10 p-6 rounded-2xl'>
        <div className='md:w-[60%] w-full'>
          <div className='h-72 relative'>
            <img src={img} alt='' className='absolute bottom-10' />
          </div>
          <span className='text-6xl capitalize max-w-[3rem] py-5'>
            How to join Our Community?
          </span>
          <p className='text-gray-600 py-5 max-w-xs'>
            Just 3 Simple Steps to optimize your company operations
          </p>
          <button className=' rounded-xl font-semibold px-6 py-3 my-5 bg-blue-500 border border-blue-500 text-white w-fit'>
            Sign up now
          </button>
        </div>
        <div className='md:w-[40%] w-full py-10'>
          <Step
            nmbr={1}
            content='reach to one of our specialists, and have short introduction session'
          />
          <Step
            nmbr={2}
            content='Our Specialist will personalized package suitable for your needs'
          />
          <Step
            nmbr={3}
            content='Poof! you are ready to work smart with optimized operations'
          />
        </div>
      </div>
    </div>
  );
}

export default Steps;

function Step({ nmbr, content }) {
  return (
    <div
      className={`flex flex-col gap-5  py-10 ${nmbr === 3 ? null : 'border-b'}`}
    >
      <span className='text-3xl'>Step {nmbr}</span>
      <p className='text-gray-500 max-w-xs'>{content}</p>
    </div>
  );
}
