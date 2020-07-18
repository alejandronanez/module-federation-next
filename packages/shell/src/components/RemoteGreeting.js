import React from "react";
import useDynamicScript from "../hooks/useDynamicScript";

const RemoteGreeting = () => {
  const scope = "homepage";
  const module = "./Greeting";
  const { ready, failed } = useDynamicScript(
    "http://localhost:8080/remoteEntry.js"
  );

  if (!ready || failed || !global) {
    return null;
  }

  global[scope].init(
    Object.assign(
      {
        react: {
          get: () => Promise.resolve(() => require("react")),
          loaded: true,
        },
      },
      global.__webpack_require__ ? global.__webpack_require__.o : {}
    )
  );

  const Component = React.lazy(() =>
    global[scope].get(module).then((factory) => {
      const Module = factory();
      return Module;
    })
  );

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Component />
    </React.Suspense>
  );
};

export default RemoteGreeting;
