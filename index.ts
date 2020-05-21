// Import stylesheets
import "./style.css";
import { Observable } from "./observable";

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById("app");
appDiv.innerHTML = `<h1>Observable example</h1>`;

const observer = () => {
  console.time("callback execution time:");
  new Array(200e6).forEach(() => {});
  console.timeEnd("callback execution time:");
};

const observableNotEfficient = new Observable<string>();
observableNotEfficient.subscribe(observer);

observableNotEfficient.publish('Without setTimeout (1)');
observableNotEfficient.publish('Without setTimeout (2)');

const observable = new Observable<string>(true);
observable.subscribe(observer);

observable.publish('With setTimeout (1)');
observable.publish('With setTimeout (2)');
