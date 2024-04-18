import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'openbao-dashboard';
  showMenu = false;

  constructor() {
  }
  ngOnInit(): void {
    const btn = <HTMLElement>document.querySelector('button.menu-button');
    const menu = <HTMLElement>document.querySelector('.mobile-menu');
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });  
  }
  toggleNavbar() {
    this.showMenu = !this.showMenu;
  }
}
