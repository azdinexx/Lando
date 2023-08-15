import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
function RootLayout() {
  return (
    <>
      <Header />
      <main className='max-w-6xl mx-auto'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
