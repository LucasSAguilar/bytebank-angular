import { Component } from '@angular/core';
import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';

@Component({
  standalone: true,
  imports: [NovaTransferenciaComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'alura-curso-angular';

  dadosRecebidos: any;

  receberDados(dadosRecebidosEvento: Event) {
    console.log(dadosRecebidosEvento);
    this.dadosRecebidos = dadosRecebidosEvento;
  }
}
