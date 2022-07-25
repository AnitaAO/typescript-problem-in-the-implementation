// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
  <h1>TypeScript A Problem In The Current Implementation</h1>

`

import { LikeComponent } from './like.component.';

let component = new LikeComponent(10, true);
component.likesCount = 2;
component.isSelected = false;
component.onClick();
console.log(`likesCount: ${component.likesCount}, isSelected: ${component.isSelected}`)
