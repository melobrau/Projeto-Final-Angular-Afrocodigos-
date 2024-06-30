import { Component, OnInit } from '@angular/core';
import { Colaborador } from '../colaborador.model';
import { ColaboradorService } from '../colaborador.service';

@Component({
  selector: 'app-lista-colaboradores',
  templateUrl: './lista-colaboradores.component.html',
  styleUrls: ['./lista-colaboradores.component.scss']
})
export class ListaColaboradoresComponent implements OnInit {
  colaboradores: Colaborador[] = [];

  constructor(private colaboradorService: ColaboradorService) { }

  ngOnInit(): void {
    this.carregarColaboradores();
  }

  carregarColaboradores(): void {
    this.colaboradorService.getColaboradores()
      .subscribe(colaboradores => this.colaboradores = colaboradores);
  }

  excluirColaborador(id: string): void {
    this.colaboradorService.excluirColaborador(id)
      .subscribe(() => {
        this.colaboradores = this.colaboradores.filter(c => c.id !== id);
      });
  }
}
