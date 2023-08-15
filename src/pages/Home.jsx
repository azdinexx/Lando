import Hero from '../components/Hero';
import SolutionSection from '../components/SolutionSection';
import SmartSave from '../components/SmartSave.jsx';
import CostSaver from '../components/CostSaverSection';
import Steps from '../components/Steps';
import Testimonials from '../components/Testimonials';
import GetStarted from '../components/GetStarted';

function Home() {
  return (
    <>
      <Hero />
      <SolutionSection />
      <SmartSave />
      <CostSaver />
      <Steps />
      <Testimonials />
      <GetStarted />
    </>
  );
}

export default Home;
