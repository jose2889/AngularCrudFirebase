import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../services/conexion.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-lista-add',
  templateUrl: './lista-add.component.html',
  styleUrls: ['./lista-add.component.css']
})
export class ListaAddComponent implements OnInit {

  item:any = {name:''}
  constructor(private servicio:ConexionService) { }

  ngOnInit() {
  }

  agregar(){
    this.servicio.addItem(this.item);
    this.item.name='';
  }
}
