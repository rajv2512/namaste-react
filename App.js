import React from "react";
import ReactDOM  from "react-dom";

const heading1 = React.createElement( "h1",{ id: "title",},"Welcome to new Tech");

const heading2 = React.createElement("h2",{id: "title",}, "Boom React");

const container = React.createElement("div",{id: "container",}, [heading1,heading2]);

console.log(heading1);

const root = ReactDOM.createRoot(document.getElementById("react1"));

root.render(container);
