import React from 'react';

const useDynamicScript = (url) => {
  const [ready, setReady] = React.useState(false);
  const [failed, setFailed] = React.useState(false);

  React.useEffect(() => {
    if (!url) {
      return;
    }

    const element = document.createElement('script');
    element.src = url;
    element.type = 'text/javascript';
    element.async = true;

    setReady(false);
    setFailed(false);

    element.onload = () => {
      console.log(`Dynamic Script Loaded: ${url}`);
      setReady(true);
    };

    element.onerror = () => {
      console.error(`Dynamic Script Error: ${url}`);
      setReady(false);
      setFailed(true);
    };

    document.head.appendChild(element);

    return () => {
      console.log(`Dynamic Script Removed: ${url}`);
      document.head.removeChild(element);
    };
  }, [url]);

  return {
    ready,
    failed,
  };
};

const RemoteComponent = ({
  remote,
  scope,
  module,
  fallback = <div>Loading...</div>,
  ...props
}) => {
  const { ready, failed } = useDynamicScript(remote);

  if (!scope || !module) {
    throw new Error(
      'You must specify scope and module to import a Remote Component',
    );
  }

  if (!ready || failed || !global) {
    return null;
  }

  global[scope].init(
    Object.assign(
      {
        react: {
          [require('react').version]: {
            get: () => Promise.resolve(() => require('react')),
            loaded: true,
            from: scope,
          },
        },
      },
      global.__webpack_require__ ? global.__webpack_require__.o : {},
    ),
  );

  const Component = React.lazy(() =>
    global[scope].get(`./${module}`).then((factory) => {
      const Module = factory();
      return Module;
    }),
  );

  return (
    <React.Suspense fallback={fallback}>
      <Component {...props} />
    </React.Suspense>
  );
};

export default RemoteComponent;
