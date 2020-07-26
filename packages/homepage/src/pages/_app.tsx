import React from 'react';
import 'styles/index.css';
import RemoteComponent from '../components/RemoteComponent';

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-sans">
      <RemoteComponent
        remote={process.env.NEXT_PUBLIC_SHELL_REMOTE}
        scope="shell"
        module="Shell"
      >
        <Component {...pageProps} />
      </RemoteComponent>
    </div>
  );
}

export default MyApp;
