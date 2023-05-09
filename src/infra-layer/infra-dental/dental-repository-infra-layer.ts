import axios from "axios";
import { DentalEntityInfraLayerAbstraction } from "../contracts-infra-layer/dental-entity.contract";
import { IDentalRepositoryInfraLayer } from "@/application-layer/services/interfaces/dental-repository-infra-layer-interface/dental-repository-infra-layer.interface";
import { IHttpRequest } from "@/application-layer/contracts/http-request.contract";
export class DentalRepositoryInfraLayer implements IDentalRepositoryInfraLayer {
  async exec(
    httpRequest: IHttpRequest,
  ): Promise<Array<DentalEntityInfraLayerAbstraction>> {
    throw new Error("waiting data");
  }
}
