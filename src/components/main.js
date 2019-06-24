import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './commons/header';
import Footer from './commons/footer';
import Index from './index';
import Contact from './contact';
import About from './about';

const Main =() =>(
  <div>
    <BrowserRouter>
      <div>
      <Header/>
      <Route exact path="/" component={Index}/>
      <Route path="/contact/" component={Contact}/>
      <Route path="/about/" component={About}/>
      <Footer/>
      </div>
    </BrowserRouter>
  </div>
)

export default Main;
