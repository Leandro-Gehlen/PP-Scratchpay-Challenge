import { App } from "./app";
import dotenv from "dotenv";

dotenv.config();

App.listen(process.env.PORT || 3000, () =>
  console.log(`App is running on http://localhost:${process.env.PORT}`),
);
