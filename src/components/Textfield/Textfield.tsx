import classNames from "classnames";
import * as React from "react";

import "./Textfield.css";

export interface ITextfieldProps {
  /**
   * @param label Button label. Optional
   */
  label?: string;
}

/**
 * @class Simple button, extends HTML Button element
 */
export class Textfield extends React.PureComponent<
  React.HTMLProps<HTMLInputElement> & ITextfieldProps
> {
  public render() {
    return (
      <input
        {...this.props}
        className={classNames("atlas-textfield", this.props.className)}
      >
        {this.props.label || this.props.children}
      </input>
    );
  }
}
