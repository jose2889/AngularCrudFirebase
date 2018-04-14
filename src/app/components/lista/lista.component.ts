import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../services/conexion.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  items:any;

  constructor(private conexion:ConexionService) {
    this.conexion.listaItems().subscribe( datos => this.items = datos )
  }
  ngOnInit() {
  }

  eliminar(item){
    this.conexion.deleteItem(item);
  }

}
