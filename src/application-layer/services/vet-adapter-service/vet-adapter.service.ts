import { IHttpRequest } from "../../contracts/http-request.contract";
import { IHttpResponse } from "../../contracts/http-response.contract";
import { IVetAdapterService } from "../../../domain-layer/usecases/interfaces/vet-adapter-service-interface/vet-adapter-service.interface";
import { IVetRepositoryInfraLayer } from "../interfaces/vet-repository-infra-layer-interface/vet-repository-infralayer.interface";
import { ChangeArrKeyHelperFunction } from "../../../presentation-layer/helper/arr-helper-functions.helper";
import { VetEntityAppLayerAbstraction } from "../../../application-layer/contracts/vet-entity.contract";
import { EnumEntityCategory } from "../../../domain-layer/entities";

export class VetAdapterService implements IVetAdapterService {
  constructor(
    private readonly vetRepositoryInfraLayer: IVetRepositoryInfraLayer,
  ) {}

  //this method prepare data to be paginated(Adapter)
  async exec(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const data = await this.vetRepositoryInfraLayer.exec();
    /************************** */
    //preparing data to be filtered
    const firstArrChange = ChangeArrKeyHelperFunction(
      "stateCode",
      "state",
      data,
    );

    const secondArrChange = ChangeArrKeyHelperFunction(
      "opening",
      "availability",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      firstArrChange,
    );
    secondArrChange.map((item, index) => {
      item.id = index + 1;
    });
    /************************************** */
    //No filter
    if (
      httpRequest.category === EnumEntityCategory.VET &&
      !httpRequest.availability &&
      !httpRequest.clinicName &&
      !httpRequest.stateCode
    ) {
      return {
        statusCode: 200,
        data: secondArrChange.sort() as Array<VetEntityAppLayerAbstraction>,
      };
    }

    /************************************************************** */
    //Filtered by clinicName only
    if (
      httpRequest.clinicName &&
      !httpRequest.availability &&
      !httpRequest.stateCode
    ) {
      const newArrFilteredByName = secondArrChange.filter((item) => {
        if (item.clinicName === httpRequest.clinicName) {
          return true;
        }
        return false;
      });

      if (newArrFilteredByName.length > 0) {
        return {
          statusCode: 200,
          data: newArrFilteredByName.sort(),
        };
      } else {
        return {
          statusCode: 400,
          BAD_REQUEST: "This clinic name does not exist on our data base.",
        };
      }
    }

    /************************************************************ */
    // Filtered by stateCode only

    return {
      statusCode: 1000,
      data: data,
    };
  }
}
