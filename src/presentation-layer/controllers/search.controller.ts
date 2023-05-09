import { IHttpRequest } from "@/application-layer/contracts/http-request.contract";
import { IHttpResponse } from "@/application-layer/contracts/http-response.contract";
import { IHelperStrategyPatternService } from "@/domain-layer/usecases/interfaces/helper-strategy-pattern-service-interface/helper-strategy-pattern-service.interface";
import { IController } from "@/presentation-layer/controllers-interface";

export class SearchController implements IController {
  constructor(
    private readonly helperStrategyPatternService: IHelperStrategyPatternService,
  ) {}

  async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    return await this.helperStrategyPatternService.exec(httpRequest);
  }
}
