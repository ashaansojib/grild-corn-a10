import React from 'react';
import Header from './components/shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/shared/Footer';
import FooterHead from './components/shared/FooterHead';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <FooterHead></FooterHead>
      <Footer></Footer>
    </div>
  );
};

export default App;