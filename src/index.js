import React from 'react';
import {createRoot} from 'react-dom/client';
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Main from './components/main.jsx'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <div>
    <Header/>
    <Main/>
    <Footer/>
  </div>
);