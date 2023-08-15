import img from '../assets/smartsave.png';

function SmartSave() {
  return (
    <section className='min-h-[90vh] flex items-center justify-center'>
      <div className='grid grid-cols-2 grid-rows-1 gap-10'>
        <div className=' '>
          <img src={img} alt='' width={600} />
        </div>
        <article className='flex flex-col gap-6'>
          <span className='uppercase text-stone-600'>Smart Save</span>
          <h5 className='text-4xl leading-20  max-w-sm '>
            All your work is safe with us
          </h5>
          <p className='text-stone-700 max-w-sm'>
            we take your data security seriously, which is why we use advanced
            encryption protocols to protect your files in the cloud. Your data
            is safe and secure with us
          </p>
          <button className=' rounded-xl font-semibold px-8 py-3 border border-black w-fit'>
            Try Now
          </button>
        </article>
      </div>
    </section>
  );
}

export default SmartSave;
