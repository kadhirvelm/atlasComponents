import { shallow } from "enzyme";
import * as React from "react";

import { Textfield } from "..";

describe("Textfield tests", () => {
  it("renders without crashing", () => {
    const textfield = shallow(<Textfield />);
    expect(textfield).toBeDefined();
  });
});
