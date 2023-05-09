import { DentalAdapterService } from "../../application-layer/services/dental-adapter-service/dental-adapter.service";
import { DentalCategoryService } from "../../application-layer/services/dental-category-service/dental-category.service";
import { HelperStrategyPatternService } from "../../application-layer/services/helper-strategy-pattern-service/helper-strategy-pattern.service";
import { VetAdapterService } from "../../application-layer/services/vet-adapter-service/vet-adapter.service";
import { VetCategoryService } from "../../application-layer/services/vet-category-service/vet-category.service";
import { DentalRepositoryInfraLayer } from "../../infra-layer/infra-dental/dental-repository-infra-layer";
import { VetRepositoryInfraLayer } from "../../infra-layer/infra-vet/vet-repository-infra-layer";
import { SearchController } from "../../presentation-layer/controllers/search.controller";

export const MakeSearchController = () => {
  const vetLoader = new VetRepositoryInfraLayer();
  const dentalLoader = new DentalRepositoryInfraLayer();
  const vetAdapter = new VetAdapterService(vetLoader);
  const dentalAdapter = new DentalAdapterService(dentalLoader);
  const dentalCategory = new DentalCategoryService(dentalAdapter);
  const vetCategory = new VetCategoryService(vetAdapter);
  //Be careful with the order of HelperStrategyPatternService args.
  //Must be vet + dental . vetCategory must  came first.
  //Otherwise the results will be displayed wrong on the switch statement inside the strategy class.
  const helper = new HelperStrategyPatternService(vetCategory, dentalCategory);
  const controller = new SearchController(helper);
  return controller;
};
