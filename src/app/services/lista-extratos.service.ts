import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListaExtratosService {
  private listaTransferencias: any[] = [];

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
}
