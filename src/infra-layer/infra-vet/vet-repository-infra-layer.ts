import { IVetRepositoryInfraLayer } from "@/application-layer/services/interfaces/vet-repository-infra-layer-interface/vet-repository-infralayer.interface";
import { VetEntityInfraLayerAbstraction } from "../contracts-infra-layer/vet-entity.contract";
import { IHttpResponse } from "@/application-layer/contracts/http-response.contract";
import axios from "axios";
export class VetRepositoryInfraLayer implements IVetRepositoryInfraLayer {
  async exec(
    httpResponse: IHttpResponse,
  ): Promise<Array<VetEntityInfraLayerAbstraction>> {
    throw new Error("waiting data");
  }
}
