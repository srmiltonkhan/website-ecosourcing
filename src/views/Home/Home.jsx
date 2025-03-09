import React from 'react';
import SectionLayout from '../../layouts/SectionLayout';

const Home = () => {
  return (
    <div>
      <SectionLayout id="home" title="Home Section" backgroundColor="#f4f4f4" />
      <SectionLayout id="about" title="ABOUT Section" backgroundColor="#fff" />
      <SectionLayout id="services" title="SERVICES Section" backgroundColor="#f4f4f4" />
      <SectionLayout id="showroom" title="Showroom Section" backgroundColor="#fff" />
      <SectionLayout id="clients" title="Clients Section" backgroundColor="#f4f4f4" />
      <SectionLayout id="ethics" title="ETHICS Section" backgroundColor="#fff" />
      <SectionLayout id="management" title="MANAGEMENT Section" backgroundColor="#f4f4f4" />
      <SectionLayout id="news" title="NEWS Section" backgroundColor="#fff" />
      <SectionLayout id="contact" title="CONTACT Section" backgroundColor="#f4f4f4" />
    </div>
  );
};

export default Home;
