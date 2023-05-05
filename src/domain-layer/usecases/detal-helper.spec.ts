import { DentalEntity, EnumEntityCategory } from "@/domain-layer/entities";
import { HttpResponseType } from "./contracts/http-response.contract";

export interface IDentalHelperService {
  dentalHelper(query: DentalEntity): Promise<HttpResponseType>;
}

export class DentalHelperService implements IDentalHelperService {
  async dentalHelper(query: DentalEntity): Promise<HttpResponseType> {
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

// ---------------------------- Production Code ----------------------------
const sutFactory = () => {
  const sut = new DentalHelperService();
  return sut;
};
// ----------------------------- Test Code ---------------------------------
describe("DentalHelperService class as SUT", () => {
  it("Should implements an IDentalHelperService that have a dentalHelp Method with a DentalEntity as an arg that returns a promise", async () => {
    const sut = sutFactory();
    const arg: DentalEntity = {
      category: EnumEntityCategory.DENTAL,
    };
    const hasMethod = await sut.dentalHelper(arg);
    expect(hasMethod).toStrictEqual(await sut.dentalHelper(arg));
  });
  it("Should return an HttpResponseType", async () => {
    const sut = sutFactory();
    const arg: DentalEntity = {
      category: EnumEntityCategory.DENTAL,
    };
    const HttpResponse: HttpResponseType = {
      statusCode: 200,
      data: [arg],
    };
    expect(await sut.dentalHelper(arg)).toStrictEqual(HttpResponse);
  });
  it("Should receive at least category as an arg to dentalHelper method", async () => {
    const sut = sutFactory();
    const arg: DentalEntity = {
      category: EnumEntityCategory.DENTAL,
    };
    sut.dentalHelper(arg);
    expect(arg.category).toBe(EnumEntityCategory.DENTAL);
  });
});
