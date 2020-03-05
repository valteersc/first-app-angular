import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursosComponent implements OnInit {

  nome="";
  idade=0;
  curso:string[] = ["C+","Java","SQL"];
  constructor() { }

  alteraNome(vl) {
    this.nome = vl;
  }

  ngOnInit(): void {
  }

}