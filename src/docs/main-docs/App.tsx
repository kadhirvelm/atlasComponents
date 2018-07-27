import * as React from "react";

import * as AtlasComponents from "../../components";
import { ComponentHolder, Navbar } from "./helperComponents";

interface IAppState {
  currentComponent: string;
}

class App extends React.Component<{}, IAppState> {
  public components: string[] = [...Object.keys(AtlasComponents)];

  public state = {
    currentComponent: ""
  };

  public render() {
    return (
      <div className="doc-root">
        <div className="atlas-header">
          <h3> Atlas Components </h3>
        </div>
        <div className="main-root">
          <Navbar
            components={this.components}
            currentComponent={this.state.currentComponent}
            openDocs={this.openDocs}
          />
          <ComponentHolder componentName={this.state.currentComponent} />
        </div>
      </div>
    );
  }

  private openDocs = (key: string) => {
    this.setState({
      currentComponent: key === this.state.currentComponent ? "" : key
    });
  };
}

export default App;
