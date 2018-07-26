import * as React from "react";

interface IComponentDocs {
  componentName: string;
}

export class ComponentDocs extends React.Component<IComponentDocs> {
  public render() {
    return <div>{this.props.componentName}</div>;
  }
}
