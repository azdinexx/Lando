import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
function RootLayout() {
  return (
    <>
      <Header />
      <main className='max-w-6xl mx-auto px-6 py-4 md:px-0 overflow-hidden'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
