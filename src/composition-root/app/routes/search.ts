import { Response, Router, Request } from "express";
import { MakeSearchController } from "../../factories/make-search-controller";
import { RequestDataValidationMiddleware } from "../../../presentation-layer/middlewares/request-data-validation.middleware";
export default (router: Router): void => {
  router.post(
    "/search",
    RequestDataValidationMiddleware,
    async (req: Request, res: Response) => {
      try {
        const controller = MakeSearchController();
        const httpResponse = await controller.handle(req.body);
        return res.json(httpResponse);
      } catch (error) {
        console.log(error);
        return new Error("Something went wrong within the controller");
      }
    },
  );
};
