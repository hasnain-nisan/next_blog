import React from 'react';
import Navbar from './Navbar';

const Layout = (props) => {
  return (
      <div className="w-full h-full">
          <Navbar/>
          <main className="relative top-20">
              {props.children}
          </main>
      </div>
  )
};

export default Layout;
