import * as React from "react";

interface IComponentDocs {
  componentName: string;
}

export class ComponentHolder extends React.Component<IComponentDocs> {
  public render() {
    return (
      <div className="component-holder">
        <div className="main-title" key={this.props.componentName}>
          {" "}
          {this.props.componentName}{" "}
        </div>
      </div>
    );
  }
}
