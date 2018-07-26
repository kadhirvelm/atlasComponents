import * as React from "react";

import { ComponentDocs } from "./ComponentDocs";
import { Navbar } from "./Navbar";

interface IAppState {
  currentComponent: string;
}

class App extends React.Component<{}, IAppState> {
  public state = {
    currentComponent: ""
  };

  public render() {
    return (
      <div className="doc-root">
        <Navbar
          currentComponent={this.state.currentComponent}
          openDocs={this.openDocs}
        />
        <ComponentDocs componentName={this.state.currentComponent} />
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
