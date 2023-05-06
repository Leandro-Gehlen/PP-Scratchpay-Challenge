import { DentalEntity, EnumEntityCategory } from "@/domain-layer/entities";
import { HelperStrategyPatternService } from "@/application-layer/services/helper-strategy-pattern-service/helper-strategy-pattern.service";
import { IHttpResponse } from "@/application-layer/contracts/http-response.contract";

// ---------------------------- Production Code ----------------------------

const makeSut = () => {
  const sut = new HelperStrategyPatternService();
  return sut;
};
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
    const HttpResponse: IHttpResponse = {
      statusCode: 200,
      data: [arg],
    };

    expect(HttpResponse.data).toEqual([arg]);
  });
  it("Should receive at least category as an arg to exec method", async () => {
    const sut = makeSut();
    const arg: DentalEntity = {
      category: EnumEntityCategory.DENTAL,
    };
    sut.exec(arg);

    expect(arg.category).toBe(EnumEntityCategory.DENTAL);
  });
  // it("Should throw an error if category do not exist on perform method arg", async () => {});
});
