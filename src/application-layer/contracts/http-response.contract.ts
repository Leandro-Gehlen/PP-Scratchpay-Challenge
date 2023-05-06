import { DentalEntity, VetEntity } from "@/domain-layer/entities";

export type IHttpResponse = {
  statusCode: number;
  data: Array<DentalEntity> | Array<VetEntity>;
};
