import { IHttpRequest } from "@/application-layer/contracts/http-request.contract";
import { IHttpResponse } from "@/application-layer/contracts/http-response.contract";
import { EnumEntityCategory } from "@/domain-layer/entities";
import { IHelperStrategyPatternService } from "@/domain-layer/usecases/interfaces/dental-helper-strategy-pattern/helper-strategy-pattern-service.interface";

export class HelperStrategyPatternService
  implements IHelperStrategyPatternService
{
  async exec(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    return {
      statusCode: 200,
      data: [
        {
          category: EnumEntityCategory.DENTAL,
        },
      ],
    };
  }
}
