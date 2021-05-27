import React from "react";
import ReactDOM from "react-dom";
import {App} from "./App";
import {reportWebVitals} from "./report-web-vitals";
import * as serviceWorkerRegistration from "./service-worker-registration";


ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root"),
);

serviceWorkerRegistration.register();

// TODO: [2022-01-01] send to Matomo
// eslint-disable-next-line no-console
void reportWebVitals(console.log);
