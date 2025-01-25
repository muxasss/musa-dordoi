import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import MainPage from './Components/MainPage/MainPage';
import AboutUs from './Components/AboutUs/AboutUs';
import News from './Components/News/News';
import Projects from './Components/Projects/Projects';
import ContactUs from './Components/ContactUs/ContactsUs';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path='*' element={<NotFound />}/>
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/news" element={<News />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
