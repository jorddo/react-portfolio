import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Home from './pages/Home';
import Footer from './components/common/Footer';

const App = () => {
  // adding background img to landing page
  const styles = {
    flex: {
      flex: 1,
    },
  };

  return (
    <div className='App' style={styles.bgContainer}>
      <Header />
      <div style={styles.flex}>
        <Routes>
          <Route exact path='/' element={<Home />} />
          {/* <Route path='about' element={<About />} />
          <Route path='projects' element={<Projects />} />
          <Route path='contact' element={<ContactForm />} /> */}
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
