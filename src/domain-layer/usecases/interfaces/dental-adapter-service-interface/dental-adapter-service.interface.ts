import { IHttpRequest } from "@/application-layer/contracts/http-request.contract";
import { IHttpResponse } from "@/application-layer/contracts/http-response.contract";

export interface IDentalAdapterService {
  exec(httpRequest: IHttpRequest): Promise<IHttpResponse>;
}
