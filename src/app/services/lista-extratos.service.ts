import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListaExtratosService {
  private listaTransferencias: any[] = [];
  private url = 'http://localhost:3000/transferencias';

  constructor() {
    this.listaTransferencias = [];
  }

  get listaTransferecias(): any[] {
    return this.listaTransferencias;
  }

  adicionarNovaTransferencia(transferencia: any) {
    this.adicionarData(transferencia);
    this.listaTransferencias.push(transferencia);
  }

  adicionarData(transferencia: any) {
    transferencia.data = new Date();
  }

  receberDados(http: HttpClient): any {
    http.get(this.url).subscribe();
  }
}
