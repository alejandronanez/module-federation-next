import React from 'react';
import Banner from '../components/Banner';
import Paragraph from '../components/Paragraph';
import Perks from '../components/Perks';

export default function Home() {
  return (
    <div>
      <Banner />
      <Paragraph />
      <Paragraph />
      <h2 className="text-center text-5xl font-black">Your future here</h2>
      <Paragraph />
      <h2 className="text-center text-5xl font-black">Our culture</h2>
      <Paragraph />
      <br />
      <Perks />
    </div>
  );
}
