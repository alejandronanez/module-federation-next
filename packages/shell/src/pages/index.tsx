import React from 'react';
import RemoteComponent from '../components/RemoteComponent';

export default function Home() {
  return (
    <div>
      <RemoteComponent
        remote="http://localhost:8001/remoteEntry.js"
        module="Homepage"
        scope="homepage"
      />
      <p className="text-xl">
        I am just a shell application - I should not contain anything. I'm just
        a 🦪
      </p>
    </div>
  );
}
