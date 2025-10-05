import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component'; 
import { AboutUsComponent } from './pages/about-us/about-us.component'; 
import { CasesComponent } from './pages/cases/cases.component';
import { ContactsComponent } from './pages/contacts/contacts.component';  
import { EnfoqueComponent } from './pages/enfoque/enfoque.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' }, 
  { path: 'enfoque', component: EnfoqueComponent },
  { path: 'casoteca', component: CasesComponent },
  { path: 'nosotros', component: AboutUsComponent },
  { path: 'contactos', component: ContactsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
