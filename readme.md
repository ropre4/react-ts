# REACT - REDUX - TS - DEMO

#### This repo is a small working example of a React-Redux app with Typescript. Can be used:
- As a starter for own project
- To learn the basics of React-Redux
- To start with Typescript

This repo includes a simple `express` server, in order to have a fully functional example.
This example was build using [TypeScript-React-Starter](https://github.com/Microsoft/TypeScript-React-Starter)

1. To run tests:
 
    - For testing, `jest` is used. 
    - For integration testing (with Backend) a server with static (hardcoded) responses is used.
    - Run `npm run static-backend`, that runs a server with hardcoded responses
    - Run `npm run test` to run tests.
    
2. To run the example:

    - Run `npm run server`, which will start a server that stores data in memory.
    - Run `npm run watch-css` to run a watcher for sass. 
    - Run `npm run start` to start the app
    - Go to localhost:3000