import { createRoot } from "react-dom/client";
import { createElement } from "react";
/*
//const reactelement = createElement(
//    "h1",
//    null,
//    "Hello World"
//);

const reactelement = <h1>Hello World</h1>;
console.log(reactelement);
const root = createRoot(document.getElementById("root"));
root.render(
    reactelement
);

//imperative way of creating an element. telling step by step how to create an element and where to put it. 
//how should be done - vanilla javascript way.

const h1=document.createElement("h1");
h1.textContent="Hello World";
document.getElementById("root").appendChild(h1);

//using innerHTML
document.getElementById("root").innerHTML = "<h1>Hello World</h1>";

//declarative way of creating an element using react.

//React takes care of creating the element and putting it in the right place.
//We just need to tell what we want.

const reactele  = createElement(
    "h1",
    null,
    "Hello World"
);

const roots = createRoot(document.getElementById("root"));
roots.render(
    reactele
);  //this is what is called declarative programming.


*/

//jsx way of creating an element using a parent main and chil.

const root = createRoot(document.getElementById("root"));
root.render(
    <main>
        <img src="https://picsum.photos/200/300" alt="random image" />
        <h1>this is image</h1>
        <ul>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
        </ul>
    </main>

);
