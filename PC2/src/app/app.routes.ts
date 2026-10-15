import { Routes } from '@angular/router';
import { EstudiantesListaComponent } from './components/estudiantes-lista/estudiantes-lista';
import { EstudianteDetalleComponent } from './components/estudiante-detalle/estudiante-detalle';

export const routes: Routes = [
  { path: 'estudiantes', component: EstudiantesListaComponent },
  { path: 'detalle', component: EstudianteDetalleComponent },
  { path: '', redirectTo: 'estudiantes', pathMatch: 'full' },
  { path: '**', redirectTo: 'estudiantes' }
];
