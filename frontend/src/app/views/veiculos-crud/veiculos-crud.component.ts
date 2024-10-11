import { Component } from '@angular/core';
import { MatSidenavContent } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { VeiculosReadComponent } from '../../components/veiculos/veiculos-read/veiculos-read.component';
import { VeiculosRead2Component } from '../../components/veiculos/veiculos-read2/veiculos-read2.component';

@Component({
  selector: 'app-veiculos-crud',
  standalone: true,
  imports: [VeiculosReadComponent,MatButtonModule, RouterLink, VeiculosRead2Component],
  templateUrl: './veiculos-crud.component.html',
  styleUrl: './veiculos-crud.component.css'
})
export class VeiculosCrudComponent {
  constructor(private router: Router) {
    
  }

  navigateToVeiculosCreate(): void {
    this.router.navigate(['/veiculos/create']);
    console.log('@@@Navegando......')
  }
}
