import { NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { MENU_OPTIONS } from '../../config/menu-options';

@Component({
  selector: 'app-header',
  imports: [RouterLink, NgOptimizedImage],
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
