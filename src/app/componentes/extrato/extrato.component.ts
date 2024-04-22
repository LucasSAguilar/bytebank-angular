import { CurrencyPipe, DatePipe, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ListaExtratosService } from '../../services/lista-extratos.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-extrato',
  standalone: true,
  imports: [NgFor, DatePipe, CurrencyPipe, NgIf, HttpClientModule],
  providers: [ListaExtratosService],
  templateUrl: './extrato.component.html',
  styleUrl: './extrato.component.scss',
})
export class ExtratoComponent {
  listaTransferencias: any[] = [];

  constructor(private http: HttpClient) {}

  // ngOnInit é uma função que é chamada automaticamente quando o componente é criado, tipo o UseEffect do React
  ngOnInit() {
    this.http
      .get('http://localhost:3000/transferencias')
      .subscribe((transferencias: Object) => {
        console.table(transferencias);
        this.listaTransferencias = transferencias as any[];
      });
  }
}
