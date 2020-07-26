import React from 'react';
import Banner from '../components/Banner';
import Paragraph from '../components/Paragraph';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div>
      <Banner />
      <Hero
        src="https://picsum.photos/id/1/1200/600"
        message="Featured homepage image"
      />
      <Paragraph />
      <br />
      <Paragraph />
      <br />
      <Paragraph />
      <br />
      <Paragraph />
    </div>
  );
}
