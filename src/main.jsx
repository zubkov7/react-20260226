import { createElement } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./components/app";

const root = document.getElementById("app");
const reactRoot = createRoot(root);

// reactRoot.render(
//   createElement(
//     "div",
//     {
//       style: { color: "red" },
//       className: "someClass",
//       onClick: () => console.log("click"),
//     },
//     createElement("div", {}, "hello world!"),
//   ),
// );

// reactRoot.render(
//   createElement(
//     "ul",
//     {
//       style: { color: "red" },
//       className: "someClass",
//       onClick: () => console.log("click"),
//     },
//     createElement("li", {}, 1),
//     createElement("li", {}, 2),
//     createElement("li", {}, 3),
//     createElement("li", {}, 4),
//     createElement("li", {}, 5),
//     createElement("li", {}, 6),
//   ),
// );

// const list = [1, 2, 3, 4, 5, 6];
// reactRoot.render(
//   createElement(
//     "ul",
//     {},
//     list.map((item) => createElement("li", {}, item)),
//   ),
// );

// reactRoot.render(<div className='someClass'>hello world!</div>);
// reactRoot.render(
//   <ul>
//     <li>1</li>
//     <li>2</li>
//     <li>3</li>
//     <li>4</li>
//     <li>5</li>
//     <li>6</li>
//   </ul>,
// );

// reactRoot.render(<img />);
// reactRoot.render(<div />);

// reactRoot.render(
//   <ul>
//     {list.map((item) => (
//       <li>{item % 2 === 0 ? 0 : 1}</li>
//     ))}
//   </ul>,
// );

reactRoot.render(<App />);

// console.log(reactRoot);
