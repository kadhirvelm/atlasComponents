import classNames from "classnames";
import * as React from "react";

interface INavBarProps {
  components: string[];
  currentComponent: string;
  openDocs(key: string): void;
}

export class Navbar extends React.PureComponent<INavBarProps> {
  public render() {
    return (
      <div className="atlas-sidebar">
        <b className="header">Components</b>
        <div className="component-list">
          {this.props.components.map((componentName, index) => (
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
