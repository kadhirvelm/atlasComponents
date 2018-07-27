var __extends =
  (this && this.__extends) ||
  (function() {
    var extendStatics =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function(d, b) {
          d.__proto__ = b;
        }) ||
      function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };
    return function(d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
var __assign =
  (this && this.__assign) ||
  Object.assign ||
  function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
import classNames from "classnames";
import * as React from "react";
import "./AtlasButton.css";
/**
 * @class Simple button, extends HTML Button element
 */
var AtlasButton = /** @class */ (function(_super) {
  __extends(AtlasButton, _super);
  function AtlasButton(props) {
    var _this = _super.call(this, props) || this;
    if (_this.props.label === undefined && _this.props.children === undefined) {
      throw new Error(
        "Cannot leave both label and children blank. Must specify at least one."
      );
    }
    return _this;
  }
  AtlasButton.prototype.render = function() {
    return React.createElement(
      "button",
      __assign({}, this.props, {
        className: classNames("atlas-button", this.props.className)
      }),
      this.props.label || this.props.children
    );
  };
  return AtlasButton;
})(React.PureComponent);
export { AtlasButton };
