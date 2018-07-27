import { shallow } from "enzyme";
import * as React from "react";

import { AtlasButton } from "..";

describe("AtlasButton tests", () => {
  it("renders without crashing", () => {
    const testButton = shallow(<AtlasButton>Test</AtlasButton>);
    expect(testButton).toBeDefined();
  });

  it("render with a label", () => {
    const testButton = shallow(<AtlasButton label="Test" />);
    expect(testButton).toBeDefined();
  });

  it("throws an error when neither label nor children are specified", () => {
    expect(() => {
      shallow(<AtlasButton />);
    }).toThrowError();
  });
});
