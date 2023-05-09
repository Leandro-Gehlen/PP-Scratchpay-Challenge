import { IHttpResponse } from "../../../../application-layer/contracts/http-response.contract";
import { IHttpRequest } from "../../../../application-layer/contracts/http-request.contract";

export interface IVetAdapterService {
  exec(httpRequest: IHttpRequest): Promise<IHttpResponse>;
}
