import { VetEntityAppLayerAbstraction } from "@/application-layer/contracts/vet-entity.contract";

export interface IVetRepositoryInfraLayer {
  exec(): Promise<Array<VetEntityAppLayerAbstraction>>;
}
