// Import stylesheets
import "./style.css";
import { Observable } from "./observable";

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById("app");
appDiv.innerHTML = `<h1>Observable example</h1>`;

const observer = () => {
  console.time("a");
  new Array(200e6).forEach(() => {});
  console.timeEnd("a");
  console.log("done");
};

const observableNotEfficient = new Observable<number>();
observableNotEfficient.subscribe(observer);

observableNotEfficient.publish(1);
observableNotEfficient.publish(2);

const observable = new Observable<number>(true);
observable.subscribe(observer);

observable.publish(3);
observable.publish(4);
