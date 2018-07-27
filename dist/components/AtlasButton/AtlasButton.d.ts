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
export declare class AtlasButton extends React.PureComponent<
  React.HTMLProps<HTMLButtonElement> & IAtlasButtonProps
> {
  constructor(props: React.HTMLProps<HTMLButtonElement> & IAtlasButtonProps);
  render(): JSX.Element;
}
