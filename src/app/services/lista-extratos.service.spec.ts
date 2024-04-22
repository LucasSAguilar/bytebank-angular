import { TestBed } from '@angular/core/testing';

import { ListaExtratosService } from './lista-extratos.service';

describe('ListaExtratosService', () => {
  let service: ListaExtratosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaExtratosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
