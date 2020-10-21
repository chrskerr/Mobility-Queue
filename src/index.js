
// dev
import React from "react";
import { hydrate, render } from "react-dom";

// app
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

//
// Index 
//

const rootElement = document.getElementById( "root" );
if ( rootElement.hasChildNodes()) {
	hydrate( <App />, rootElement );
} else {
	render( <App />, rootElement );
}

serviceWorker.register();
