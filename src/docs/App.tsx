import * as React from "react";

import { AtlasButton } from "../components";

class App extends React.Component {
  public render() {
    return (
      <div className="flexbox">
        <div> Atlas components docs running. </div>
        <AtlasButton>Test!</AtlasButton>
      </div>
    );
  }
}

export default App;
