import { DentalEntity, EnumEntityCategory } from "@/domain-layer/entities";
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
  it("Should receive at least category as an arg to exec method", async () => {
    const sut = makeSut();
    const arg: DentalEntity = {
      category: EnumEntityCategory.DENTAL,
    };
    sut.exec(arg);

    expect(arg.category).toBe(EnumEntityCategory.DENTAL);
  });
});
