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
import * as React from "react";
import "./App.css";
var App = /** @class */ (function(_super) {
  __extends(App, _super);
  function App() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  App.prototype.render = function() {
    return React.createElement(
      "div",
      { className: "App" },
      " Atlas components docs running"
    );
  };
  return App;
})(React.Component);
export default App;
//# sourceMappingURL=App.js.map
