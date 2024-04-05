import { App } from './app.js';

const routes = [
  new CategoryRoute(),
  new PostRoute(),
];

const app = new App();

app.listen();
