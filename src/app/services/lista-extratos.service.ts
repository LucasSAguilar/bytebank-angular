import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';

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
    return http.get('http://localhost:3000/transferencias');
  }

  enviarDado(http: HttpClient, dados: Transferencia): any {
    return http.post(this.url, dados);
  }
}
