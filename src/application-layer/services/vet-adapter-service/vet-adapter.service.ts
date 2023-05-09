import { IHttpRequest } from "../../contracts/http-request.contract";
import { IHttpResponse } from "../../contracts/http-response.contract";
import { IVetAdapterService } from "../../../domain-layer/usecases/interfaces/vet-adapter-service-interface/vet-adapter-service.interface";
import { IVetRepositoryInfraLayer } from "../interfaces/vet-repository-infra-layer-interface/vet-repository-infralayer.interface";

export class VetAdapterService implements IVetAdapterService {
  constructor(
    private readonly vetRepositoryInfraLayer: IVetRepositoryInfraLayer,
  ) {}
  async exec(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const data = await this.vetRepositoryInfraLayer.exec();
    return {
      statusCode: 200,
      data,
    };
  }
}
