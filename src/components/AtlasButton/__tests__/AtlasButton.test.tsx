import { shallow } from "enzyme";
import * as React from "react";

import { AtlasButton } from "..";

describe("AtlasButton tests", () => {
  it("renders without crashing", () => {
    const testButton = shallow(<AtlasButton />);
    expect(testButton).not.toBeUndefined();
  });
});
