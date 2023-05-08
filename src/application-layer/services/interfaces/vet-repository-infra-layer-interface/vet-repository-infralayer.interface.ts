import { IHttpRequest } from "@/application-layer/contracts/http-request.contract";
import { VetEntityAppLayerAbstraction } from "@/application-layer/contracts/vet-entity.contract";

export interface IVetRepositoryInfraLayer {
  exec(httpRequest: IHttpRequest): Promise<Array<VetEntityAppLayerAbstraction>>;
}
