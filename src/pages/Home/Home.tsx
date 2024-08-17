import React from 'react';
import {
  BasicInformation,
  Work,
  Skills,
  DeveloperSetup,
  Resources,
} from '../index';

// Since there are no props, no need for a props type/interface
const Home = () => {
  return (
    <div className="Home">
      <p>heheheh</p>
      <BasicInformation />
      <Work />
      <Skills />
      <DeveloperSetup />
      <Resources />
    </div>
  );
};

export default Home;
