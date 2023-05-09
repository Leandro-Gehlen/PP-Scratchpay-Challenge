import { IVetRepositoryInfraLayer } from "@/application-layer/services/interfaces/vet-repository-infra-layer-interface/vet-repository-infralayer.interface";
import { VetEntityInfraLayerAbstraction } from "../contracts-infra-layer/vet-entity.contract";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
export class VetRepositoryInfraLayer implements IVetRepositoryInfraLayer {
  async exec(): Promise<Array<VetEntityInfraLayerAbstraction>> {
    const res: Promise<Array<VetEntityInfraLayerAbstraction>> = await axios
      .get(process.env.VET_BASE_URL as string)
      .then((res) => res.data);
    return res;
  }
}
