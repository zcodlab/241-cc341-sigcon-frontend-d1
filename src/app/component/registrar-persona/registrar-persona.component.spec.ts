import { formatDate } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Persona } from '../../model/persona';
import { TipoDocumento } from '../../model/tipo-documento';

import { RegistrarPersonaComponent } from './registrar-persona.component';

describe('RegistrarPersonaComponent', () => {
  let component: RegistrarPersonaComponent;
  let fixture: ComponentFixture<RegistrarPersonaComponent>;
  let persona: Persona;
  let deb: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RegistrarPersonaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrarPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    deb = fixture.debugElement;

    const ltipo_documento: TipoDocumento = {
      id_tipo_documento: 1,
      descripcion: 'DNI',
    };

    persona = {
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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.isEdited).toBeFalse();
  });

  it('Debe retornar formulario personaForm valido', () => {
    component.personaForm.setValue({
      id_persona: persona.id_persona,
      apellido_paterno: persona.apellido_paterno,
      apellido_materno: persona.apellido_materno,
      nombres: persona.nombres,
      fecha_nacimiento: formatDate(
        persona.fecha_nacimiento,
        'yyyy-MM-dd',
        component.locale,
        'UTC' + component.offset
      ),
      id_tipo_documento: persona.id_tipo_documento,
    });

    const btnElement = deb.query(By.css('.btn'));

    expect(component.personaForm.invalid).toBeFalse();
    expect(btnElement.nativeElement.disabled).toBeTrue();
  });
});
