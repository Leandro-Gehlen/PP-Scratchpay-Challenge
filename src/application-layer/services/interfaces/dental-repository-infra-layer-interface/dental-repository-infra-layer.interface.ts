import { DentalEntityAppLayerAbstraction } from "@/application-layer/contracts/dental-entity.contract";
import { IHttpRequest } from "@/application-layer/contracts/http-request.contract";

export interface IDentalRepositoryInfraLayer {
  exec(
    httpRequest: IHttpRequest,
  ): Promise<Array<DentalEntityAppLayerAbstraction>>;
}
