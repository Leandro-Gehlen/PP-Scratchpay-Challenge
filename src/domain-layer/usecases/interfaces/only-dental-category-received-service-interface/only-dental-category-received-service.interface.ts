import { IHttpRequest } from "@/application-layer/contracts/http-request.contract";
import { DentalEntity } from "@/domain-layer/entities";

export abstract class IOnlyDentalCategoryReceivedService {
  abstract exec(httpRequest: IHttpRequest): Promise<Array<DentalEntity>>;
}
