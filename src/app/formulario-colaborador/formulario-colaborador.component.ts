import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Colaborador } from '../colaborador.model';
import { ColaboradorService } from '../colaborador.service';

@Component({
  selector: 'app-formulario-colaborador',
  templateUrl: './formulario-colaborador.component.html',
  styleUrls: ['./formulario-colaborador.component.scss']
})
export class FormularioColaboradorComponent implements OnInit {
  colaborador: Colaborador = { id: '', nome: '', cargo: '' };
  editando = false;

  constructor(
    private colaboradorService: ColaboradorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.editando = true;
      this.colaboradorService.getColaborador(id)
        .subscribe(colaborador => this.colaborador = colaborador);
    }
  }

  salvar(): void {
    if (this.editando) {
      this.colaboradorService.editarColaborador(this.colaborador.id, this.colaborador)
        .subscribe(() => this.navegarParaLista());
    } else {
      this.colaboradorService.adicionarColaborador(this.colaborador)
        .subscribe(() => this.navegarParaLista());
    }
  }

  navegarParaLista(): void {
    this.router.navigate(['/colaboradores']);
  }
}
