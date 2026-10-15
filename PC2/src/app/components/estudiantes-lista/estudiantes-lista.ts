import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';
import { Estudiante, EstudianteService } from '../../services/estudiante.service';

@Component({
  selector: 'app-estudiantes-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './estudiantes-lista.html'
})
export class EstudiantesListaComponent implements OnInit {
  estudiantes = signal<Estudiante[]>([]);
  errorCarga = signal('');

  constructor(private servicio: EstudianteService, private router: Router) {}

  ngOnInit(): void {
    this.servicio.obtenerEstudiantes().pipe(timeout({ first: 10000 })).subscribe({
      next: (datos: Estudiante[]) => {
        this.estudiantes.set(datos);
      },
      error: (err: any) => {
        console.error('Error al traer datos:', err);
        this.errorCarga.set('No se pudieron cargar los registros. Verifica la URL y la disponibilidad de la API.');
      }
    });
  }

  verDetalle(estudiante: Estudiante): void {
    this.router.navigate(['/detalle'], { state: { data: estudiante } });
  }
}
