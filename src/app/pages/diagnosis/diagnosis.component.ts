import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/layouts/header/header.component";
import { ButtonComponent } from "../../shared/components/button/button.component";

@Component({
  selector: 'app-diagnosis',
  imports: [HeaderComponent, ButtonComponent],
  templateUrl: './diagnosis.component.html',
  styleUrl: './diagnosis.component.scss'
})
export class DiagnosisComponent {

}
