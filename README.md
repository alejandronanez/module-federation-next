# Module Federation - Next.js Applications

This project contains 3 Next.js applications that share code between each other using [Webpack's Module Federation](https://webpack.js.org/concepts/module-federation/)

You can read more about Module Federation in Webpack's [official documentation](https://webpack.js.org/concepts/module-federation/), in this [Youtube Playlist](https://www.youtube.com/playlist?list=PLWSiF9YHHK-DqsFHGYbeAMwbd9xcZbEWJ) or by buying the [Practical Module Federation Book](https://module-federation.myshopify.com/products/practical-module-federation), written by one of the Module Federation co-creators.

## About the project

As mentioned before, this project has 3 applications:

1. `Shell`. Which is the app that contains the application shell and routes, you can think of it as the glue layer between other applications.
2. `Homepage`. Homepage for a fictional company.
3. `Jobs`. Jobs page for a fictional company.

This project uses [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) **for convenience**, so make sure to get run `yarn install` from the root of the project to get everything installed.

Since Next.js is not using `Webpack 5` by the time of this writing, we need to create a `side-car` webpack configuration for each project. That means, that we have a folder that contains a `Webpack 5` configuration and it's the one that takes care of sharing the modules between the applications. That said, we will have an application structure that looks like this:

```
# Some files were hidden for brevity

packages/shell
├── README.md
├── node_modules
├── package.json
├── public
│   ├── favicon.ico
│   └── vercel.svg
├── src
│   ├── components
│   ├── hooks
│   ├── pages
│   └── styles
├── wp5-host # Webpack 5 side-car
│   ├── node_modules
│   ├── package.json
│   ├── src
│   ├── webpack.config.js # Webpack 5 configuration
│   └── yarn.lock
└── yarn.lock
```

To recap, the commands that we will need are:

```
# From the root of the project

yarn # install all the dependencies needed. Next.js applications and Webpack 5 sidecars.

yarn dev # Run all Next.js applications in development mode and the webpack sidecars
```

If you want to run specific commands for each application, feel free to take a look at the main `package.json` in each one of the folders mentioned above.

## Application addresses

You can visit the applications in the following addresses:

| Application | Address               |
| ----------- | --------------------- |
| Shell       | http://localhost:3000 |
| Homepage    | http://localhost:3001 |
| Jobs        | http://localhost:3002 |
