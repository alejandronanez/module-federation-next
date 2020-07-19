import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

const Shell = ({ children }) => {
  return (
    <React.Fragment>
      <Navigation />
      <div className="max-w-5xl m-auto py-4 px-2">{children}</div>
      <Footer />
    </React.Fragment>
  );
};

export default Shell;
