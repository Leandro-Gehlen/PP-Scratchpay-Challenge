import { IVetRepositoryInfraLayer } from "../../application-layer/services/interfaces/vet-repository-infra-layer-interface/vet-repository-infralayer.interface";
import { VetEntityInfraLayerAbstraction } from "../contracts-infra-layer/vet-entity.contract";
import { ChangeArrKeyHelperFunction } from "../../presentation-layer/helper/change-arr-key-helper-function.helper";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
export class VetRepositoryInfraLayer implements IVetRepositoryInfraLayer {
  async exec(): Promise<Array<VetEntityInfraLayerAbstraction>> {
    const res: Promise<Array<VetEntityInfraLayerAbstraction>> = await axios
      .get(process.env.VET_BASE_URL as string)
      .then((res) => res.data);
    const result = ChangeArrKeyHelperFunction(
      "opening",
      "availability",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      res as any,
    );
    return result;
  }
}
