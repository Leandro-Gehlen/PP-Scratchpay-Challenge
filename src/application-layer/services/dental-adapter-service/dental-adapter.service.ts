import { IHttpRequest } from "@/application-layer/contracts/http-request.contract";
import { IHttpResponse } from "@/application-layer/contracts/http-response.contract";
import { IDentalRepositoryInfraLayer } from "../interfaces/dental-repository-infra-layer-interface/dental-repository-infra-layer.interface";
import { IDentalAdapterService } from "@/domain-layer/usecases/interfaces/dental-adapter-service-interface/dental-adapter-service.interface";

export class DentalAdapterService implements IDentalAdapterService {
  constructor(
    private readonly dentalRepositoryInfraLayer: IDentalRepositoryInfraLayer,
  ) {}
  async exec(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    return await this.dentalRepositoryInfraLayer.exec(httpRequest);
  }
}
