import { Component } from '@angular/core';
import { ButtonComponent } from "../../components/button/button.component";
import { MENU_OPTIONS } from '../../config/menu-options';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [ButtonComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuOptions = MENU_OPTIONS
}
