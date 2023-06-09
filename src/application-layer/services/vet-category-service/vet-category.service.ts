import { IHttpRequest } from "@/application-layer/contracts/http-request.contract";
import { IHttpResponse } from "@/application-layer/contracts/http-response.contract";
import { IUseCaseService } from "@/domain-layer/usecases/interfaces/use-case-service-interface/use-case-service.interface";
import { IVetAdapterService } from "@/domain-layer/usecases/interfaces/vet-adapter-service-interface/vet-adapter-service.interface";

export class VetCategoryService implements IUseCaseService {
  constructor(private readonly vetAdapterService: IVetAdapterService) {}
  async exec(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    return this.vetAdapterService.exec(httpRequest);
  }
}
