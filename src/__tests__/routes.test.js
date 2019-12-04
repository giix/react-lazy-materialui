import ROUTES, { getRoutes } from "../routes";

describe("My Test Suite", () => {
  it("My Test Case", () => {
    expect(true).toEqual(true);
  });

  it("Test getRoutes all", () => {
    expect(getRoutes()).toEqual(ROUTES);
  });

  it("Test getRoutes-one level", () => {
    expect(getRoutes("/examples")).toEqual(ROUTES[3]);
  });

  it("Test getRoutes-two level", () => {
    expect(getRoutes("/examples/stepper")).toEqual(ROUTES[3].children[0]);
  });
});
