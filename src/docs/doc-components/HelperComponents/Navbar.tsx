import classNames from "classnames";
import * as React from "react";

interface INavBarProps {
  currentComponent: string;
  openDocs(key: string): void;
}

export class Navbar extends React.PureComponent<INavBarProps> {
  private components = ["AtlasButton"];

  public render() {
    return (
      <div className="atlas-sidebar">
        <b className="header">Components</b>
        <div className="component-list">
          {this.components.map((componentName, index) => (
            <div
              className={classNames("component-row", {
                selected: componentName === this.props.currentComponent
              })}
              key={index}
              onClick={this.openComponent(componentName)}
            >
              {componentName}
            </div>
          ))}
        </div>
      </div>
    );
  }

  private openComponent = (key: string) => {
    return () => {
      this.props.openDocs(key);
    };
  };
}
