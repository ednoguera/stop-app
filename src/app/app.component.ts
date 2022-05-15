import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Stop Game</h1>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stop-app';
}
