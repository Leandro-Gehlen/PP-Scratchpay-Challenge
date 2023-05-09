import { Request, Response, NextFunction } from "express";
export const RequestDataValidationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (Object.keys(req.body).length === 0) {
    return res.json({
      statuCode: 400,
      BAD_REQUEST: "At least a category must be provided",
    });
  }
  if (!req.body.category) {
    return res.json({
      statuCode: 400,
      BAD_REQUEST: "A category must be provided",
    });
  }
  if (req.body.category !== "dental" && req.body.category !== "vet") {
    return res.json({
      statuCode: 400,
      BAD_REQUEST: "Invalid category. Please, provide a valid one.",
    });
  }

  next();
};
