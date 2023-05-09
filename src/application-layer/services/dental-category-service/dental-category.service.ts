import { IHttpRequest } from "../../../application-layer/contracts/http-request.contract";
import { IHttpResponse } from "../../../application-layer/contracts/http-response.contract";
import { IDentalAdapterService } from "../../../domain-layer/usecases/interfaces/dental-adapter-service-interface/dental-adapter-service.interface";
import { IUseCaseService } from "../../../domain-layer/usecases/interfaces/use-case-service-interface/use-case-service.interface";

export class DentalCategoryService implements IUseCaseService {
  constructor(private readonly dentalAdapterService: IDentalAdapterService) {}
  async exec(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    return this.dentalAdapterService.exec(httpRequest);
  }
}
