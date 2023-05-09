import { MakeSearchController } from "@/composition-root/factories/make-search-controller";
import { Response, Router, Request } from "express";

export default (router: Router): void => {
  router.get("/search", async (req: Request, res: Response) => {
    const controller = MakeSearchController();
    const httpResponse = await controller.handle(req.body);
    res.json(httpResponse);
  });
};
