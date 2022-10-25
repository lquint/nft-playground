import React from 'react';
import Footer from './footer';
import Navbar from './navbar';

const Layout = function layout({ children }) {
  return (
    <div className="">
      <Navbar />
      <div className="content h-4/5">{children}</div>
      <Footer />
    </div>
  );
};
Layout.propTypes = {
  children: Layout.string.isRequired
}
export default Layout;
