import React from 'react';
import Banner from '../components/Banner';
import Paragraph from '../components/Paragraph';
import Hero from '../components/Hero';
// import RemoteComponent from '../components/RemoteComponent';

export default function Home() {
  return (
    <div>
      <Banner />
      <Hero
        src="https://picsum.photos/id/1/1200/600"
        message="Featured homepage image"
      />
      {/* <RemoteComponent
        remote="http://localhost:8002/remoteEntry.js"
        scope="jobs"
        module="FeaturedJob"
      /> */}
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
