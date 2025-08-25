import { Routes } from '@angular/router';
import { DefenseComponent } from './pages/defense/defense.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { DiagnosisComponent } from './pages/diagnosis/diagnosis.component';
import { CasesComponent } from './pages/cases/cases.component';
import { ContactsComponent } from './pages/contacts/contacts.component';

export const routes: Routes = [
  { path: '', redirectTo: '/diagnosis', pathMatch: 'full' },
  { path: 'diagnosis', component: DiagnosisComponent },
  { path: 'defense', component: DefenseComponent },
  { path: 'about_us', component: AboutUsComponent },
  { path: 'cases_library', component: CasesComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: '**', redirectTo: '/diagnosis' },
];
