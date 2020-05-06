// Import stylesheets
import "./style.css";
import { Observable } from "./observable";

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById("app");
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const observable = new Observable<number>();
observable.subscribe(console.log);

observable.publish(1);
