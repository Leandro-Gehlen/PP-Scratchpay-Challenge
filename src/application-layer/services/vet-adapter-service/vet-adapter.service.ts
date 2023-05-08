import { IHttpRequest } from "@/application-layer/contracts/http-request.contract";
import { IHttpResponse } from "@/application-layer/contracts/http-response.contract";
import { IVetAdapterService } from "@/domain-layer/usecases/interfaces/vet-adapter-service-interface/vet-adapter-service.interface";
import { IVetRepositoryInfraLayer } from "../interfaces/vet-repository-infra-layer-interface/vet-repository-infralayer.interface";

export class vetAdapterService implements IVetAdapterService {
  constructor(
    private readonly vetRepositoryInfraLayer: IVetRepositoryInfraLayer,
  ) {}
  async exec(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    return await this.vetRepositoryInfraLayer.exec(httpRequest);
  }
}
