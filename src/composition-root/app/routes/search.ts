import { Response, Router, Request } from "express";

export default (router: Router): void => {
  router.get("/search", (req: Request, res: Response) => {
    res.json({ msg: "Hello World!" });
  });
};
