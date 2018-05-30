import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-nav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['app-nav.component.scss'],
  template: `
    <div class="app-nav">
      <div class="wrapper">
        <a routerLink="ranking" routerLinkActive="active">Ranking</a>
        <a routerLink="games" routerLinkActive="active">Games</a>
      </div>
    </div>
  `
})
export class AppNavComponent {
  constructor() {}
}
