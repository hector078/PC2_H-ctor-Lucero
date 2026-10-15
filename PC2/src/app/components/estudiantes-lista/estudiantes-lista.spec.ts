import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstudiantesLista } from './estudiantes-lista';

describe('EstudiantesLista', () => {
  let component: EstudiantesLista;
  let fixture: ComponentFixture<EstudiantesLista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstudiantesLista],
    }).compileComponents();

    fixture = TestBed.createComponent(EstudiantesLista);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
