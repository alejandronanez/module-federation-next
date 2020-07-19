import React from 'react';
import useDynamicScript from '../hooks/useDynamicScript';

const RemoteGreeting = ({
  remote,
  scope,
  module,
  fallback = <div>Loading...</div>,
  children,
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
          get: () => Promise.resolve(() => require('react')),
          loaded: true,
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
      <Component>{children}</Component>
    </React.Suspense>
  );
};

export default RemoteGreeting;
