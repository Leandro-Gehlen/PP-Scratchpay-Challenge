import { IHttpRequest } from "../../../application-layer/contracts/http-request.contract";
import { IHttpResponse } from "../../../application-layer/contracts/http-response.contract";
import { EnumEntityCategory } from "../../../domain-layer/entities/entities";
import { IHelperStrategyPatternService } from "../../../domain-layer/usecases/interfaces/helper-strategy-pattern-service-interface/helper-strategy-pattern-service.interface";
import { IUseCaseService } from "../../../domain-layer/usecases/interfaces/use-case-service-interface/use-case-service.interface";

export class HelperStrategyPatternService
  implements IHelperStrategyPatternService
{
  constructor(
    private readonly vetCategoryService: IUseCaseService,
    private readonly dentalCategoryService: IUseCaseService,
  ) {}
  async exec(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    console.log(httpRequest);
    if (Object.keys(httpRequest).length === 0) {
      throw new Error("At least a category must be provided");
    }
    if (!httpRequest.category) {
      throw new Error("A category must be provided");
    }

    switch (httpRequest.category) {
      case EnumEntityCategory.DENTAL:
        return this.dentalCategoryService.exec(httpRequest);
      case EnumEntityCategory.VET:
        return this.vetCategoryService.exec(httpRequest);
      default:
        throw new Error("A category must be provided");
    }
  }
}
