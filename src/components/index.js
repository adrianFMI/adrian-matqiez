import React from 'react';
import AboutCard from './aboutCard'
import BackgroundOne from './BackgroundOne'
import BackgroundTwo from './BackgroundTwo'
import BackgroundThree from './BackgroundThree'
import Carousel from './Carousel'
const Index = () => (
  <div className="container expand">
  <BackgroundOne/>
  <Carousel/>
  <BackgroundTwo/>
  <AboutCard/>
  <BackgroundThree/>
  </div>
)
export default Index;
