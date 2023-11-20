import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Nota } from 'src/app/domain/nota';
import { NotasService } from 'src/app/notas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  nota: Nota = new Nota();

  constructor(private notasService: NotasService,
    private router: Router) {

      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        console.log(params)
        this.nota = new Nota()
        this.nota = params['nota']
      }
    }
    

  enviar() {
    console.log(this.nota)
    this.notasService.save(this.nota)
    this.nota = new Nota()
  }

  actualizar() {
    console.log(this.nota)
    this.notasService.update(this.nota.uid,this.nota);
    this.router.navigate(["page/page6"])
  }
}
