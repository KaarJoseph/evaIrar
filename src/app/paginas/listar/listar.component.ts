import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Nota } from 'src/app/domain/nota';
import { NotasService } from 'src/app/notas.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent {

  listadoContactos: Nota[] = [];
  listadoContactosFire: any;

  constructor(private notasService: NotasService, private router: Router) {

    this.listadoContactos=notasService.getList()
    console.log('lista productos', this.listadoContactos)

    this.listadoContactosFire=notasService.getAll()
  }

  editar(nota: Nota){
    console.log(nota);
    let params: NavigationExtras = {
      queryParams: {
        nota: nota,
        nombre: 'Irar'
      }
    };
    //this.router.navigate(['formulario'], params);
    this.router.navigate(['paginas/formulario'], params);
  }

    eliminar(event: Event,nota:Nota){
      this.notasService.delete(nota.uid)
    }
  
  nuevo() {
    this.router.navigate(['paginas/formulario']);
  }
}