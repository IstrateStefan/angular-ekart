import { Component } from '@angular/core';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css'],
})
export class MainMenuComponent {
  mainMenuItems = [
    'Home',
    'Products',
    'Sale',
    'New Arrival',
    'Contact',
    'Services',
  ];
}
