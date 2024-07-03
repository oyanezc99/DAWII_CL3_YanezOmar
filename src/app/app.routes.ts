import { Routes } from '@angular/router';
import { PlanetasComponent } from './planetas/planetas.component';
import { TodosComponent } from './todos/todos.component';

export const routes: Routes = [
  { path: 'location', component: PlanetasComponent },
  { path: 'todos', component: TodosComponent },
  { path: '**', redirectTo: '' } 
];
