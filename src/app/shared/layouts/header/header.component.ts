import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { MENU_OPTIONS } from '../../config/menu-options';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [ButtonComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  menuOptions = MENU_OPTIONS;
  private router = inject(Router);

  private routeSignal = signal(this.router.url);
  currentRoute = computed(() => this.routeSignal().replace(/^\//, ''));

  showMobileMenu = signal(false);

  constructor() {
    this.router.events.subscribe(() => {
      this.routeSignal.set(this.router.url);
      this.showMobileMenu.set(false);
    });
  }
}