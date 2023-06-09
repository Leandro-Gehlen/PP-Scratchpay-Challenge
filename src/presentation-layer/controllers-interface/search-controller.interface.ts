import { IHttpRequest } from "@/application-layer/contracts/http-request.contract";
import { IHttpResponse } from "@/application-layer/contracts/http-response.contract";

export interface IController {
  handle(httpRequest: IHttpRequest): Promise<IHttpResponse>;
}
