import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import RootLayout from './layout/RootLayout.jsx';
import Pricing from './pages/Pricing';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <>
      <Routes>
        <Route path='/'>
          <Route element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path='login' element={<LogIn />} />
            <Route path='signup' element={<SignUp />} />
            <Route path='about-us' element={<AboutUs />} />
            <Route path='contact' element={<ContactUs />} />
            <Route path='pricing' element={<Pricing />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
