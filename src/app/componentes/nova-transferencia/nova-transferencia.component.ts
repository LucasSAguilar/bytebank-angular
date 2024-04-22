import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListaExtratosService } from '../../services/lista-extratos.service';

@Component({
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number = 0;
  destino: number = 0;

  constructor(
    private service: ListaExtratosService,
    private http: HttpClient
  ) {}

  transferir() {
    console.log('Solicitada nova transferência');
    console.log(`Destino ${this.destino}`);
    console.log(`Valor: ${this.valor}`);

    this.service
      .enviarDado(this.http, {
        valor: this.valor,
        destino: this.destino,
        data: new Date(),
      })
      .subscribe({
        next: () => {
          console.log('Transferência realizada com sucesso');
        },
      });

    this.limparCampos();
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
