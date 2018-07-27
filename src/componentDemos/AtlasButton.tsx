import * as React from "react";

import { AtlasButton } from "../components";

export default class AtlasButtonDemo extends React.Component {
  public render() {
    return (
      <div>
        <AtlasButton label="With label" />
        <AtlasButton>Test Button</AtlasButton>
      </div>
    );
  }
}
