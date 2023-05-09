import { DentalEntityAppLayerAbstraction } from "@/application-layer/contracts/dental-entity.contract";

export interface IDentalRepositoryInfraLayer {
  exec(): Promise<Array<DentalEntityAppLayerAbstraction>>;
}
