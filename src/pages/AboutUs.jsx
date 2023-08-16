import aboutusImg from '../assets/aboutus.png';
import heroimg from '../assets/hero.png';
import man from '../assets/team/man.jpeg';
import GetStarted from '../components/GetStarted';

function AboutUs() {
  return (
    <>
      <div className='flex flex-col gap-6 md:my-20 items-center'>
        <h1 className='text-5xl text-center '>About Us</h1>
        <p className='max-w-sm text-center mx-auto text-gray-600'>
          we offer revolutionary solution to industry problems. Join Lando
          Community and experience the benefits of company optimization today!
        </p>
        <img src={aboutusImg} alt='' width={650} />
        <span className='text-5xl text-center '>Our Mission</span>
        <p className='max-w-xl text-center mx-auto text-gray-600 pb-20 border-b border-stone-300 mb-10'>
          At Lando, we are commited to providing excellent services to our
          customers and clients and to help them achieve the best outcomes. We
          believe that we can make a positive impact on our community, industry
          and the world. Our Lando team is dedicated to providing the best
          possible service and support, and we are always looking for ways to
          improve and innovate.
        </p>
        <div className='flex md:w-[60rem] justify-center items-center  mb-10'>
          <p className='flex flex-col text-4xl font-semibold w-1/2 md:pl-20 gap-2'>
            <span>Let&apos;s start </span>
            <span>working </span>
            <span>more </span>
            <span>efficiently</span>
            <span>today!</span>
          </p>
          <div className='w-1/2 flex items-center justify-center'>
            <img src={heroimg} alt='' width={300} />
          </div>
        </div>
        <Team />
      </div>
      <GetStarted />
    </>
  );
}

export default AboutUs;

function Team() {
  return (
    <div className='  flex flex-col gap-6'>
      <h1 className='text-5xl text-center '>Team</h1>
      <p className='max-w-sm text-center mx-auto text-gray-600'>
        Meet the people behind the magical product
      </p>
      <div className='grid md:grid-cols-4 grid-cols-3   md:grid-rows-2 gap-10  md:w-[700px] my-4'>
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
      </div>
    </div>
  );
}

function Person() {
  return (
    <div className='flex flex-col items-center'>
      <div className='rounded-full overflow-hidden w-20 h-20 mb-4'>
        <img src={man} alt='' className='object-cover ' />
      </div>
      <span className='text-gray-800'>John Doe</span>
      <p className='text-sm text-stone-600'>CEO</p>
    </div>
  );
}
