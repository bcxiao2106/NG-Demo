import { Component, OnInit, Input } from '@angular/core';
import { Menu } from '../../models/Menu';

@Component({
  selector: 'app-sider-nav',
  templateUrl: './sider-nav.component.html',
  styleUrls: ['./sider-nav.component.css']
})


export class SiderNavComponent implements OnInit {

  @Input('sidebarDataSource') sidebarDataSource: Menu[];
  isCollapsed: Boolean = false;
  sidebarCollpaseClass: String = 'sidebar';
  constructor() { }

  ngOnInit() {
  }

  public navbarCollapse(): void {
    this.sidebarCollpaseClass = 'sidebar-collapsed';
    this.isCollapsed = true;
  }

  public navbarExpand(): void {
    this.sidebarCollpaseClass = 'sidebar';
    this.isCollapsed = false;
  }
}
