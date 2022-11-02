import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Header from './pages/Header';
import Footer from './pages/Footer';
import ParticlesBg from 'particles-bg';





export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);
  

  return (
    <div>
      <ParticlesBg color="#0047AB" num={200} type="cobweb" bg={true} />
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <Header/>
      <Footer/>
      {renderPage()}
      </div>
  );
}


