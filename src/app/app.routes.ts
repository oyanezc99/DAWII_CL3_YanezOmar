import { Routes } from '@angular/router';
import { PlanetasComponent } from './planetas/planetas.component';

export const routes: Routes = [
  { path: 'location', component: PlanetasComponent },
  { path: '**', redirectTo: '' } 
];
