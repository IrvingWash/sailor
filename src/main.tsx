import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";
import { AppViewModel } from "./app-view-model";

const rootElement = document.getElementById("root");

if (rootElement === null) {
    throw new Error("Failed to attach React to the root element");
}

const root = createRoot(rootElement);

const appViewModel = new AppViewModel();

root.render(
    <StrictMode>
        <App model={ appViewModel } />
    </StrictMode>,
);
