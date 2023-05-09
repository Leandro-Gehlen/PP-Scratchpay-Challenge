import { Response, Router, Request } from "express";
import { MakeSearchController } from "../../factories/make-search-controller";
export default (router: Router): void => {
  router.get("/search", async (req: Request, res: Response) => {
    try {
      const controller = MakeSearchController();
      const httpResponse = await controller.handle(req.body);
      return res.json(httpResponse);
    } catch (error) {
      console.log(error);
      return error;
    }
  });
};
