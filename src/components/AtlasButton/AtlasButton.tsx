import classNames from "classnames";
import * as React from "react";

import "./AtlasButton.css";

export interface IAtlasButtonProps {
  /**
   * @param label Button label. Optional
   */
  label?: string;
}

/**
 * @class Simple button, extends HTML Button element
 */
export class AtlasButton extends React.PureComponent<
  React.HTMLProps<HTMLButtonElement> & IAtlasButtonProps
> {
  public constructor(
    props: React.HTMLProps<HTMLButtonElement> & IAtlasButtonProps
  ) {
    super(props);
    if (this.props.label === undefined && this.props.children === undefined) {
      throw new Error(
        "Cannot leave both label and children blank. Must specify at least one."
      );
    }
  }

  public render() {
    return (
      <button
        {...this.props}
        className={classNames("atlas-button", this.props.className)}
      >
        {this.props.label || this.props.children}
      </button>
    );
  }
}
