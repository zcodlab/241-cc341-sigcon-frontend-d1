import { Persona } from './../model/persona';
import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { PersonaService } from './persona.service';
import { formatDate } from '@angular/common';
import { TipoDocumento } from '../model/tipo-documento';

describe('PersonaService', () => {
  let service: PersonaService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule] });
    service = TestBed.inject(PersonaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getPersona', (done: DoneFn) => {
    service.getPersona().subscribe((value) => {
      expect(value).toBeInstanceOf(Array);
      expect(value.length).toBeGreaterThan(30);
      //expect(value.length).toBeLessThan(0);
      done();
    });
  });

  it('registrarPersona', (done: DoneFn) => {
    const ltipo_documento: TipoDocumento = {
      id_tipo_documento: 1,
      descripcion: 'DNI',
    };
    let persona1: Persona;
    const persona: Persona = {
      id_persona: 0,
      apellido_paterno: 'TEST_APEPATERNO',
      apellido_materno: 'TEST_APEMATERNO',
      nombres: 'TEST_NOMBRES',
      fecha_nacimiento: new Date('1992-04-05'),
      id_tipo_documento: 1,
      ndocumento: '55556667',
      direccion: 'Av. Guardia Chalaca 565',
      idubigeo: '070104',
      tipo_documento: ltipo_documento,
    };

    service.registrarPersona(persona).subscribe((value) => {
      //expect(persona.id_tipo_documento).toEqual(1);
      //expect(value.nombres).toEqual('TEST_NOMBRES');
      expect(value.id_persona).toBeGreaterThan(190);
      //expect(value.id_persona).toBeLessThan(190);
      done();
    });
  });
});
