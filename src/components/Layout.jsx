import React from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import CustomCursor from "./CustomCursor";
import ScrollToTop from "./ScrollToTop";

const Layout = ({ children }) => {
  const location = useLocation();
  
  return (
    <div className="min-h-screen bg-white">
      {/* <CustomCursor /> */}
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
