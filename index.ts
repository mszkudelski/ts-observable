// Import stylesheets
import './style.css';
import { Observable } from './observable';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const observable = new Observable<number>();
observable.subscribe(() => {
  console.time('a');
  new Array(200e6).forEach(() => {});
  console.timeEnd('a');
  console.log('done');
  });
  
  observable.publish(1)