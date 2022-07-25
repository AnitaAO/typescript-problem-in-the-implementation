// Import stylesheets
import './style.css';
import {LikeComponent } from './like.component';
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = 
`
  <h1>TypeScript A Problem In The Current Implementation</h1>
`

let component = new LikeComponent(10, true);
component._likesCount = 2;
component._isSelected = false;
component.onClick();
console.log(`likesCount: ${component.likesCount}, isSelected: ${component.isSelected}`)
