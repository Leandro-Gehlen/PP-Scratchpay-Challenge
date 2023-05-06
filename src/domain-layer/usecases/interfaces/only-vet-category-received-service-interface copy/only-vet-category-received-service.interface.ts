import { IHttpRequest } from "@/application-layer/contracts/http-request.contract";
import { VetEntity } from "@/domain-layer/entities";

export abstract class IOnlyVetCategoryReceivedService {
  abstract exec(httpRequest: IHttpRequest): Promise<Array<VetEntity>>;
}
