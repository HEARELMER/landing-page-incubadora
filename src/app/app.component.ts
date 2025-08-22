import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from "./shared/components/button/button.component";
import { HeaderComponent } from "./shared/layouts/header/header.component";
import { FooterComponent } from "./shared/layouts/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'landing-page-incubadora';
}
