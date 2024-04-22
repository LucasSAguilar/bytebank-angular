import { CurrencyPipe, DatePipe, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ListaExtratosService } from '../../services/lista-extratos.service';

@Component({
  selector: 'app-extrato',
  standalone: true,
  imports: [NgFor, DatePipe, CurrencyPipe, NgIf],
  templateUrl: './extrato.component.html',
  styleUrl: './extrato.component.scss',
})
export class ExtratoComponent {
  listaTransferencias: any[] = [];

  constructor(private serviceTransferencias: ListaExtratosService) {}

  // ngOnInit é uma função que é chamada automaticamente quando o componente é criado, tipo o UseEffect do React
  ngOnInit() {
    this.listaTransferencias = this.serviceTransferencias.listaTransferecias;
  }
}
