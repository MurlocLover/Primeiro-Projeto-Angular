import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  /* Interpolação de Dados */
  name: string = 'Guilherme';
  age: number = 21;
  job = 'Programador';
  hobbies = ["Academia", " Basquete", " Videogames", " Cantar" ];
  car = {
    name: 'HB20',
    year: 2019,


  }
  constructor() { }

  ngOnInit(): void {
  }

}
