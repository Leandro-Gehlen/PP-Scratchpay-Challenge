import { DentalEntity, EnumEntityCategory } from "@/domain-layer/entities";

export interface IDentalHelperService {
  dentalHelper(query: DentalEntity): Promise<any>;
}

export class DentalHelperService implements IDentalHelperService {
  async dentalHelper(query: DentalEntity): Promise<any> {
    return;
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
    expect(hasMethod).toBe(await sut.dentalHelper(arg));
  });
});
