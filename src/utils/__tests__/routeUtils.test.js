import ROUTES from "../../routes";
import { getRoutes } from "../routeUtil";

describe("My Test Suite", () => {
  it("Test getRoutes all", () => {
    expect(getRoutes()).toEqual(ROUTES);
  });

  it("Test getRoutes-one level", () => {
    expect(getRoutes("/examples")).toEqual(ROUTES[2]);
  });

  it("Test getRoutes-two level", () => {
    expect(getRoutes("/examples/stepper")).toEqual(ROUTES[2].children[0]);
  });
});
