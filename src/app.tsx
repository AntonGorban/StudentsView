import * as React from "react";
import * as ReactDOM from "react-dom";

import { AppPresentation } from "./App.Presentation";

function render() {
  ReactDOM.render(
    <React.StrictMode>
      <AppPresentation />
    </React.StrictMode>,
    document.body
  );
}

render();
