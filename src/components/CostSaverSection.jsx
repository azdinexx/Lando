import img from '../assets/CostSaver.png';

function CostSaver() {
  return (
    <section className='md:min-h-screen flex items-center justify-center'>
      <div className='grid md:grid-cols-2 grid-cols-1  grid-rows-1  gap-10 w-full'>
        <article className='flex flex-col gap-6 pl-10'>
          <span className='uppercase text-stone-600'>Cost Save</span>
          <h5 className='text-4xl leading-20  max-w-sm '>
            Cost Saving in a smart way
          </h5>
          <p className='text-stone-700 max-w-sm'>
            Powerfull tool that helps you reduce costs and save money on your
            business operations. With advanced analytics and optimization
            algorithms, you can reduce your costs by up to 30%.
          </p>
          <button className=' rounded-xl font-semibold px-8 py-3 border border-black w-fit'>
            Try Now
          </button>
        </article>
        <div className='hidden md:flex justify-center'>
          <img src={img} alt='' width={300} className='-top-10' />
        </div>
      </div>
    </section>
  );
}

export default CostSaver;
