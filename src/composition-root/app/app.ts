import { setupRoutes } from "./routes";

import express, { Request, Response } from "express";

const App = express();
App.use(express.json());
App.use(express.urlencoded({ extended: true }));

setupRoutes(App);

App.use((req: Request, res: Response) => {
  res.status(404).send("Page not found!");
});

export { App };
