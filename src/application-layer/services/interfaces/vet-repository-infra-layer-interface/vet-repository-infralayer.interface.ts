import { VetEntityAppLayerAbstraction } from "../../../contracts/vet-entity.contract";

export interface IVetRepositoryInfraLayer {
  exec(): Promise<Array<VetEntityAppLayerAbstraction>>;
}
