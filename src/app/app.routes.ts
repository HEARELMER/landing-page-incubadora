import { Routes } from '@angular/router';
import { DefenseComponent } from './pages/defense/defense.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { DiagnosisComponent } from './pages/diagnosis/diagnosis.component';

export const routes: Routes = [
    {path: '', redirectTo: '/diagnosis', pathMatch: 'full'},
    {path:'diagnosis', component:DiagnosisComponent },
    {path: 'defense', component: DefenseComponent},
    {path: 'about_us', component: AboutUsComponent},
    {path: '**', redirectTo: '/diagnosis'}
];
