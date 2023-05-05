import { DentalEntity } from "../entities";
import { HttpResponseType } from "./contracts/http-response.contract";

export interface IDentalHelperService {
  dentalHelper(query: DentalEntity): Promise<HttpResponseType>;
}
