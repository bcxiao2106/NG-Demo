import { Component } from '@angular/core';
import { MENUS } from './core/mocks/mock-menu';
import { Menu } from './shared/models/Menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  sidebarDataSource: Menu[] = MENUS;
}
