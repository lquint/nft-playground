import React from 'react';
import {PropTypes} from "prop-types";
import Footer from './footer';
import Navbar from './navbar';

const Layout = function layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="grow">{children}</div>
      <Footer className="mt-auto "/>
    </div>
  );
};
Layout.propTypes = {
  children: PropTypes.string.isRequired
}
export default Layout;
