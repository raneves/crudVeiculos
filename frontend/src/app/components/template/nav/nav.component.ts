
import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from '../../../views/home/home.component';
import { VeiculosCrudComponent } from '../../../views/veiculos-crud/veiculos-crud.component';



@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MatSidenavModule, MatListModule, RouterOutlet, RouterLink, MatCardModule, HomeComponent,
    VeiculosCrudComponent
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
