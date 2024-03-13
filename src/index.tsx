import React from "react";
import ReactDOM from "react-dom/client";
import Test from "./components/Test";


const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <Test />
    </React.StrictMode>
);

