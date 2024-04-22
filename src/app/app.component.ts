import { Component } from '@angular/core';
import { NovaTransferenciaComponent } from './componentes/nova-transferencia/nova-transferencia.component';
import { ExtratoComponent } from './componentes/extrato/extrato.component';
import { ListaExtratosService } from './services/lista-extratos.service';

@Component({
  standalone: true,
  imports: [NovaTransferenciaComponent, ExtratoComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'alura-curso-angular';


  constructor(private serviceListarExtratos: ListaExtratosService) {}

  receberDados(dadosRecebidosEvento: Event) {
    this.serviceListarExtratos.adicionarNovaTransferencia(dadosRecebidosEvento);
  }
}
