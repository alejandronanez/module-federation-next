import React from 'react';
import 'styles/index.css';
import RemoteComponent from '../components/RemoteComponent';

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-sans">
      <RemoteComponent
        remote={`https://shell-mf.alejandronanez.vercel.app/mf/remoteEntry.js`}
        scope="shell"
        module="Shell"
      >
        <Component {...pageProps} />
      </RemoteComponent>
    </div>
  );
}

export default MyApp;
