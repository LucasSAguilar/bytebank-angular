import { Routes } from '@angular/router';
import { NovaTransferenciaComponent } from './componentes/nova-transferencia/nova-transferencia.component';
import { ExtratoComponent } from './componentes/extrato/extrato.component';

export const routes: Routes = [
  {
    path: '',
    component: NovaTransferenciaComponent,
  },
  {
    path: 'nova-transferencia',
    component: NovaTransferenciaComponent,
  },
  {
    path: 'extrato',
    component: ExtratoComponent,
  },
];
