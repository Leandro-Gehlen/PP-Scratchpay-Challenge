import axios from "axios";
import { DentalEntityInfraLayerAbstraction } from "../contracts-infra-layer/dental-entity.contract";
import { IDentalRepositoryInfraLayer } from "@/application-layer/services/interfaces/dental-repository-infra-layer-interface/dental-repository-infra-layer.interface";
import dotenv from "dotenv";

dotenv.config();
export class DentalRepositoryInfraLayer implements IDentalRepositoryInfraLayer {
  async exec(): Promise<Array<DentalEntityInfraLayerAbstraction>> {
    const res: Promise<Array<DentalEntityInfraLayerAbstraction>> = await axios
      .get(process.env.DENTAL_BASE_URL as string)
      .then((res) => res.data);
    return res;
  }
}
