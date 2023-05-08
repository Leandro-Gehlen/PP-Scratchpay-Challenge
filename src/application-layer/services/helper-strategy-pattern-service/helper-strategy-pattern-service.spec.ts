import {
  DentalEntity,
  EnumEntityCategory,
  VetEntity,
} from "@/domain-layer/entities";
import { HelperStrategyPatternService } from "@/application-layer/services/helper-strategy-pattern-service/helper-strategy-pattern.service";
import { IHttpResponse } from "@/application-layer/contracts/http-response.contract";
import { IHelperStrategyPatternService } from "@/domain-layer/usecases/interfaces/helper-strategy-pattern-service-interface/helper-strategy-pattern-service.interface";
import { IHttpRequest } from "@/application-layer/contracts/http-request.contract";

// ---------------------------- Production Code ----------------------------

const makeSut = () => {
  const sut = new HelperStrategyPatternService();
  return sut;
};

class OnlyDentalCategoryReceivedServiceSpy
  implements IHelperStrategyPatternService
{
  category: EnumEntityCategory = EnumEntityCategory.DENTAL;
  async exec(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    return {
      statusCode: 200,
      data: [
        {
          category: EnumEntityCategory.DENTAL,
        },
      ],
    };
  }
}
// ----------------------------- Test Code ---------------------------------
describe("HelperStrategyPatternService class as SUT", () => {
  it("Should implements an IHelperStrategyPatternService that have a exec method with a IHttpRequest as an arg that returns a promise", async () => {
    const sut = makeSut();
    const arg: DentalEntity = {
      category: EnumEntityCategory.DENTAL,
    };
    const hasMethod = await sut.exec(arg);

    expect(hasMethod).toStrictEqual(await sut.exec(arg));
  });
  it("Should return an IHttpResponse with a array of DentalEntity objects as data", async () => {
    const sut = makeSut();
    const arg: DentalEntity = {
      category: EnumEntityCategory.DENTAL,
    };

    const httpRequest: IHttpRequest = {
      category: EnumEntityCategory.DENTAL,
    };

    expect((await sut.exec(httpRequest)).data).toEqual([arg]);
  });
  it("Should return status 200 if Dental category is passed on request and also return an array of DentalEntity as data", async () => {
    const sut = makeSut();
    const httpRequest: IHttpRequest = {
      category: EnumEntityCategory.DENTAL,
    };
    const arg: DentalEntity = {
      category: EnumEntityCategory.DENTAL,
    };
    const statusCoderesult = (await sut.exec(httpRequest)).statusCode;
    const dataResult = (await sut.exec(httpRequest)).data;

    expect(statusCoderesult).toBe(200);
    expect(dataResult).toStrictEqual([arg]);
  });
  /*   it("Should return status 200 if Vet category is passed on request and also return an array of VetEntity as data", async () => {
    const sut = makeSut();
    const httpRequest: IHttpRequest = {
      category: EnumEntityCategory.VET,
    };
    const arg: VetEntity = {
      category: EnumEntityCategory.VET,
    };
    const statusCoderesult = (await sut.exec(httpRequest)).statusCode;
    const dataResult = (await sut.exec(httpRequest)).data;

    expect(statusCoderesult).toBe(200);
    expect(dataResult).toStrictEqual([arg]);
  }); */
});
