import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { ApiTodosService } from '../service/api-todos.service';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, MatListModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {
  todos:any[] = [];

  private idInicio = 25
  private idFin = 90

  constructor(private apiService: ApiTodosService){}
  ngOnInit():void{
    this.apiService.getTodos().subscribe(data=>{
      this.todos = data.filter((x: any) => x.id >= this.idInicio && x.id <= this.idFin);
    })
  }
}
