import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ClinicaService } from '../../services/clinica.service';

@Component({
  selector: 'app-crear-clinica',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './crear-clinica.component.html',
  styleUrls: ['./crear-clinica.component.css']
})
export class CrearClinicaComponent {

  clinica = {
    nombre: '',
    direccion: '',
    telefono: ''
  };

  constructor(
    private clinicaService: ClinicaService,
    private router: Router
  ) {}

  crear() {
    this.clinicaService.crearClinica(this.clinica).subscribe({
      next: () => this.router.navigate(['/clinicas']),
      error: (err: any) => console.error('Error al crear', err)
    });
  }
}
