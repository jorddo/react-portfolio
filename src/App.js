import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import ContactForm from './pages/Contact';
import Footer from './components/common/Footer';
import Image from './assets/landing-bg.jpg';

const App = () => {
  // adding background img to landing page
  const styles = {
    bgContainer: {
      height: '100vh',
      backgroundSize: 'cover',
      backgroundImage: `url(${Image})`,
    },
  };

  return (
    <div className='App' style={styles.bgContainer}>
      <Header />
      <Routes>
        <Route path='react-portfolio' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='projects' element={<Projects />} />
        <Route path='contact' element={<ContactForm />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
