import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'openbao-dashboard';
  showMenu = false;

  toggleNavbar() {
    this.showMenu = !this.showMenu;
  }
}
