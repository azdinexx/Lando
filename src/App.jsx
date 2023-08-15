import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import SolutionSection from './components/SolutionSection';
import SmartSave from './components/SmartSave.jsx';
import CostSaver from './components/CostSaverSection';
import Steps from './components/Steps';
import Testimonials from './components/Testimonials';
import GetStarted from './components/GetStarted';

function App() {
  return (
    <>
      <Header />
      <main className='max-w-6xl mx-auto'>
        <Hero />
        <SolutionSection />
        <SmartSave />
        <CostSaver />
        <Steps />
        <Testimonials />
        <GetStarted />
      </main>
      <Footer />
    </>
  );
}

export default App;
