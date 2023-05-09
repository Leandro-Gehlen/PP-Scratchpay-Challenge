import { IDentalAdapterService } from "../../../domain-layer/usecases/interfaces/dental-adapter-service-interface/dental-adapter-service.interface";
import { IDentalRepositoryInfraLayer } from "../interfaces/dental-repository-infra-layer-interface/dental-repository-infra-layer.interface";
import { IHttpResponse } from "../../../application-layer/contracts/http-response.contract";
import { IHttpRequest } from "../../../application-layer/contracts/http-request.contract";

export class DentalAdapterService implements IDentalAdapterService {
  constructor(
    private readonly dentalRepositoryInfraLayer: IDentalRepositoryInfraLayer,
  ) {}
  async exec(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const data = await this.dentalRepositoryInfraLayer.exec();
    return {
      statusCode: 200,
      data,
    };
  }
}
