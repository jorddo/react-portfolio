import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import ContactForm from './pages/Contact';
import Footer from './components/common/Footer';

const App = () => (
  <div className='App'>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='projects' element={<Projects />} />
      <Route path='contact' element={<ContactForm />} />
    </Routes>
    <Footer />
  </div>
);

export default App;
