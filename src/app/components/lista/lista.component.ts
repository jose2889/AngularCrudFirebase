import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../services/conexion.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  name:any;
  items:any;
  editarItem:any = {
    name:''
  }

  constructor(private conexion:ConexionService) {
    this.conexion.listaItems().subscribe( datos => this.items = datos )
  }
  ngOnInit() {
  }

  eliminar(id){
    this.conexion.deleteItem(id);
  }

  editar(item){
    this.editarItem = item;
  }

  agregarItemEditado(){
    this.conexion.updateItem(this.editarItem);
  }

}
