import { DentalEntity, VetEntity } from "../../domain-layer/entities";

export type IHttpResponse = {
  statusCode: number;
  message?: string;
  data?: Array<DentalEntity> | Array<VetEntity>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  BAD_REQUEST?: any;
};
