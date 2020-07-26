import React from 'react';
import 'styles/index.css';
import RemoteComponent from '../components/RemoteComponent';

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-sans">
      <RemoteComponent
        remote="http://localhost:8000/remoteEntry.js"
        scope="shell"
        module="Shell"
      >
        <Component {...pageProps} />
      </RemoteComponent>
    </div>
  );
}

export default MyApp;
