import { IHttpRequest } from "@/application-layer/contracts/http-request.contract";
import { IHttpResponse } from "@/application-layer/contracts/http-response.contract";
import { IUseCaseService } from "@/domain-layer/usecases/interfaces/use-case-service-interface/use-case-service.interface";

export class VetCategoryService implements IUseCaseService {
  async exec(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    throw new Error("Method not implemented.");
  }
}
