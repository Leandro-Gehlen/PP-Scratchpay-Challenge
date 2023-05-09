import { DentalEntityAppLayerAbstraction } from "../../../contracts/dental-entity.contract";

export interface IDentalRepositoryInfraLayer {
  exec(): Promise<Array<DentalEntityAppLayerAbstraction>>;
}
