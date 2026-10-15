import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Estudiante } from '../../services/estudiante.service';

@Component({
  selector: 'app-estudiante-detalle',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './estudiante-detalle.html'
})
export class EstudianteDetalleComponent implements OnInit {
  estudiante!: Estudiante;

  constructor(private router: Router) {
    const navegacion = this.router.getCurrentNavigation();
    if (navegacion?.extras.state) {
      this.estudiante = navegacion.extras.state['data'];
    }
  }

  ngOnInit(): void {
    if (!this.estudiante) {
      this.router.navigate(['/estudiantes']);
    }
  }

  get sumaNotas(): number {
    return this.estudiante.nota1 + this.estudiante.nota2 + this.estudiante.nota3;
  }

  get promedio(): number {
    return this.sumaNotas / 3;
  }

  get estadoAcademico(): string {
    return this.promedio >= 13 ? 'Aprobado' : 'Desaprobado';
  }

  get observacion(): string {
    const prom = this.promedio;
    if (prom >= 17) return 'Excelente';
    if (prom >= 13) return 'Regular';
    return 'En riesgo';
  }
}
