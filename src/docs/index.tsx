import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./doc-components/App";
import registerServiceWorker from "./registerServiceWorker";

import "./index.sass";

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
registerServiceWorker();
