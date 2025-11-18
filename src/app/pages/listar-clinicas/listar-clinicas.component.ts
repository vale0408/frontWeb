import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClinicaService } from '../../services/clinica.service';

@Component({
  selector: 'app-listar-clinicas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './listar-clinicas.component.html',
  styleUrls: ['./listar-clinicas.component.css']
})
export class ListarClinicasComponent {

  clinicas: any[] = [];

  constructor(private clinicaService: ClinicaService) {}

  ngOnInit() {
    this.cargarClinicas();
  }

  cargarClinicas() {
    this.clinicaService.listarClinicas().subscribe(data => {
      this.clinicas = data;
    });
  }

  eliminarClinica(id: number) {
    this.clinicaService.eliminarClinica(id).subscribe(() => {
      this.cargarClinicas();
    });
  }
}
