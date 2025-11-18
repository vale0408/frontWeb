import { Routes } from '@angular/router';
import { ListarClinicasComponent } from './pages/listar-clinicas/listar-clinicas.component';
import { CrearClinicaComponent } from './pages/crear-clinica/crear-clinica.component';
import { VerClinicaComponent } from './pages/ver-clinica/ver-clinica.component';
import { EditarClinicaComponent } from './pages/editar-clinica/editar-clinica.component';

export const routes: Routes = [
  { path: '', component: ListarClinicasComponent },
  { path: 'crear', component: CrearClinicaComponent },
  { path: 'ver/:id', component: VerClinicaComponent },
  { path: 'editar/:id', component: EditarClinicaComponent },
];

