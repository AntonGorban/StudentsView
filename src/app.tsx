import * as React from "react";
import * as ReactDOM from "react-dom";

import { Home } from "./Components/Home";

function render() {
  ReactDOM.render(
    <React.StrictMode>
      <Home />
    </React.StrictMode>,
    document.body
  );
}

render();
