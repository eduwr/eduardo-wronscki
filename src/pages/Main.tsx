import React from 'react';

import {
  Header,
  ServicesSection,
  TechsSection,
  Footer,
} from '../components/organisms';

const Main: React.FC = () => {
  return (
    <>
      <Header />
      <ServicesSection />
      <TechsSection />
      <Footer />
    </>
  );
};

export default Main;
