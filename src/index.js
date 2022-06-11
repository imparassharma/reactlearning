import React from 'react';
import ReactDom from 'react-dom';
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Main from './components/main.jsx'

ReactDom.render(
  <div>
    <Header/>
    <Main/>
    <Footer/>
  </div>,document.getElementById("root")
);