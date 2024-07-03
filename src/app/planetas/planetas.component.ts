import { Component } from '@angular/core';
import { ApiPlanetasService } from '../service/api-planetas.service';
import { CommonModule } from '@angular/common';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-planetas',
  standalone: true,
  imports: [CommonModule,MatListModule],
  templateUrl: './planetas.component.html',
  styleUrl: './planetas.component.css'
})
export class PlanetasComponent {
  planets:any[] = [];

  constructor(private apiService: ApiPlanetasService){}

 ngOnInit(): void {
   this.apiService.getPlanets().subscribe(data =>{
     this.planets = data.results;
   });
 }
 
}
