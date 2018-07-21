import { TestClass } from "../button";

it("contains the test function", () => {
  const testClass = new TestClass();
  expect(testClass).not.toBeUndefined();
  expect(testClass.testFunction()).toEqual("Reaching test function");
});
