import { IHttpRequest } from "@/application-layer/contracts/http-request.contract";
import { IHttpResponse } from "@/application-layer/contracts/http-response.contract";
import { EnumEntityCategory } from "@/domain-layer/entities";
import { IHelperStrategyPatternService } from "@/domain-layer/usecases/interfaces/helper-strategy-pattern-service-interface/helper-strategy-pattern-service.interface";
import { IUseCaseService } from "@/domain-layer/usecases/interfaces/use-case-service-interface/use-case-service.interface";

export class HelperStrategyPatternService
  implements IHelperStrategyPatternService
{
  constructor(
    private readonly vetCategory?: IUseCaseService,
    private readonly dentalCategory?: IUseCaseService,
  ) {}
  async exec(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    if (Object.keys(httpRequest).length === 0) {
      throw new Error("At least a category must be provided");
    }
    if (!httpRequest.category) {
      throw new Error("A category must be provided");
    }

    let setCategory: EnumEntityCategory;
    switch (httpRequest.category) {
      case EnumEntityCategory.DENTAL:
        setCategory = EnumEntityCategory.DENTAL;
        break;
      case EnumEntityCategory.VET:
        setCategory = EnumEntityCategory.VET;
        break;
    }
    return {
      statusCode: 200,
      data: [
        {
          category: setCategory,
        },
      ],
    };
  }
}
