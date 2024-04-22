import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [FormsModule],
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number | null = null;
  destino: number | null = null;

  transferir() {
    console.log('Solicitada nova transferência');
    console.log(`Destino ${this.destino}`);
    console.log(`Valor: ${this.valor}`);

    this.aoTransferir.emit({ valor: this.valor, destino: this.destino });
    this.limparCampos();
  }

  limparCampos(){
    this.valor = null;
    this.destino = null;
  }
}
