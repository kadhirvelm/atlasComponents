import * as classNames from "classnames";
import * as React from "react";

import "./AtlasButton.sass";

/**
 * @class Simple button, extends HTML Button element
 */
export class AtlasButton extends React.PureComponent<
  React.HTMLProps<HTMLButtonElement>
> {
  public render() {
    return (
      <button
        {...this.props}
        className={classNames("atlas-button", this.props.className)}
      >
        <div className="centered"> {this.props.children} </div>
      </button>
    );
  }
}
