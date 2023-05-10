import { IDentalAdapterService } from "../../../domain-layer/usecases/interfaces/dental-adapter-service-interface/dental-adapter-service.interface";
import { IDentalRepositoryInfraLayer } from "../interfaces/dental-repository-infra-layer-interface/dental-repository-infra-layer.interface";
import { IHttpResponse } from "../../../application-layer/contracts/http-response.contract";
import { IHttpRequest } from "../../../application-layer/contracts/http-request.contract";
import { ChangeArrKeyHelperFunction } from "../../../presentation-layer/helper/arr-helper-functions.helper";
import { DentalEntityAppLayerAbstraction } from "../../contracts/dental-entity.contract";
import { EnumEntityCategory } from "../../../domain-layer/entities";

export class DentalAdapterService implements IDentalAdapterService {
  constructor(
    private readonly dentalRepositoryInfraLayer: IDentalRepositoryInfraLayer,
  ) {}
  async exec(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const data = await this.dentalRepositoryInfraLayer.exec();
    /************************** */
    //preparing data to be filtered
    const firstArrChange = ChangeArrKeyHelperFunction(
      "stateName",
      "state",
      data,
    );

    const secondArrChange = ChangeArrKeyHelperFunction(
      "name",
      "clinicName",
      firstArrChange,
    );

    secondArrChange.map((item, index) => {
      item.id = index + 1;
    });
    /************************************** */
    //No filter
    if (
      httpRequest.category === EnumEntityCategory.DENTAL &&
      !httpRequest.availability &&
      !httpRequest.clinicName &&
      !httpRequest.state
    ) {
      return {
        statusCode: 200,
        data: secondArrChange.sort() as Array<DentalEntityAppLayerAbstraction>,
      };
    }

    /************************************************************** */
    //Filtered by clinicName only
    if (
      httpRequest.clinicName &&
      !httpRequest.availability &&
      !httpRequest.state
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

    if (
      !httpRequest.clinicName &&
      !httpRequest.availability &&
      httpRequest.state
    ) {
      const newArrFilteredByState = secondArrChange.filter((item) => {
        if (item.state === httpRequest.state) {
          return true;
        }
        return false;
      });

      if (newArrFilteredByState.length > 0) {
        return {
          statusCode: 200,
          data: newArrFilteredByState.sort(),
        };
      } else {
        return {
          statusCode: 400,
          BAD_REQUEST: "There is no clinics at this location on our data base.",
        };
      }
    }

    /************************************************************* */
    // Filtered by availability only

    if (
      !httpRequest.clinicName &&
      httpRequest.availability &&
      !httpRequest.state
    ) {
      const newArrFilteredByAvailability = secondArrChange.filter((item) => {
        if (item.availability.from === httpRequest.availability?.from) {
          return true;
        }
        if (item.availability.to === httpRequest.availability?.to) {
          return true;
        }
        return false;
      });

      if (newArrFilteredByAvailability.length > 0) {
        return {
          statusCode: 200,
          data: newArrFilteredByAvailability.sort(),
        };
      } else {
        return {
          statusCode: 400,
          BAD_REQUEST:
            "No dental clinics available at the time range provided.",
        };
      }
    }

    /*********************************************************** */
    //Filtered by name and state
    if (
      httpRequest.clinicName &&
      !httpRequest.availability &&
      httpRequest.state
    ) {
      const newArrFilteredByClinicNameAndState = secondArrChange.filter(
        (item) => {
          if (
            item.clinicName === httpRequest.clinicName ||
            item.state === httpRequest.state
          ) {
            return true;
          }
          if (
            item.clinicName === httpRequest.clinicName &&
            item.state === httpRequest.state
          ) {
            return true;
          }

          return false;
        },
      );

      if (newArrFilteredByClinicNameAndState.length > 0) {
        return {
          statusCode: 200,
          data: newArrFilteredByClinicNameAndState.sort(),
        };
      } else {
        return {
          statusCode: 400,
          BAD_REQUEST:
            "There is no clinics with this name and/or at this location",
        };
      }
    }

    /*********************************************************** */
    //Filtered by name and availability
    if (
      httpRequest.clinicName &&
      httpRequest.availability &&
      !httpRequest.state
    ) {
      const newArrFilteredByAvailabilityAndName = secondArrChange.filter(
        (item) => {
          if (
            item.availability.from === httpRequest.availability?.from ||
            item.clinicName === httpRequest.clinicName
          ) {
            return true;
          }
          if (
            item.availability.from === httpRequest.availability?.from &&
            item.clinicName === httpRequest.clinicName
          ) {
            return true;
          }
          if (
            item.availability.to === httpRequest.availability?.to ||
            item.clinicName === httpRequest.clinicName
          ) {
            return true;
          }
          if (
            item.availability.to === httpRequest.availability?.to &&
            item.clinicName === httpRequest.clinicName
          ) {
            return true;
          }
          return false;
        },
      );

      if (newArrFilteredByAvailabilityAndName.length > 0) {
        return {
          statusCode: 200,
          data: newArrFilteredByAvailabilityAndName.sort(),
        };
      } else {
        return {
          statusCode: 400,
          BAD_REQUEST:
            "There is no clinics with this name or/and with this availability",
        };
      }
    }
    /*********************************************************** */
    //Filtered by state and availability
    if (
      !httpRequest.clinicName &&
      httpRequest.availability &&
      httpRequest.state
    ) {
      const newArrFilteredByAvailabilityAndState = secondArrChange.filter(
        (item) => {
          if (
            item.availability.from === httpRequest.availability?.from ||
            item.state === httpRequest.state
          ) {
            return true;
          }
          if (
            item.availability.from === httpRequest.availability?.from &&
            item.state === httpRequest.state
          ) {
            return true;
          }
          if (
            item.availability.to === httpRequest.availability?.to ||
            item.state === httpRequest.state
          ) {
            return true;
          }
          if (
            item.availability.to === httpRequest.availability?.to &&
            item.state === httpRequest.state
          ) {
            return true;
          }
          return false;
        },
      );

      if (newArrFilteredByAvailabilityAndState.length > 0) {
        return {
          statusCode: 200,
          data: newArrFilteredByAvailabilityAndState.sort(),
        };
      } else {
        return {
          statusCode: 400,
          BAD_REQUEST:
            "There is no clinics with this availability and/or within this state",
        };
      }
    }
    /*********************************************************** */
    //When all params hava been provided
    if (
      httpRequest.clinicName &&
      httpRequest.availability &&
      httpRequest.state
    ) {
      const newArrFilteredWithAllParamProvided = secondArrChange.filter(
        (item) => {
          if (
            item.availability.from === httpRequest.availability?.from &&
            item.availability.to === httpRequest.availability?.to &&
            item.state === httpRequest.state &&
            item.state === httpRequest.state
          ) {
            return true;
          }
          return false;
        },
      );

      if (newArrFilteredWithAllParamProvided.length > 0) {
        return {
          statusCode: 200,
          data: newArrFilteredWithAllParamProvided.sort(),
        };
      } else {
        return {
          statusCode: 400,
          BAD_REQUEST: "This clinic does not exist on our database",
        };
      }
    }

    /*********************************************************** */

    return {
      statusCode: 500,
      message: "There is no data with those params",
    };
  }
}
