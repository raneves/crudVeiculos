import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Veiculo } from '../veiculo.model';
import { VeiculoService } from '../veiculo.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-veiculos-update',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule,
    FormsModule, MatSnackBarModule, HttpClientModule],
  templateUrl: './veiculos-update.component.html',
  styleUrl: './veiculos-update.component.css'
})
export class VeiculosUpdateComponent {
  veiculo : Veiculo = {
    nome : '',
    preco: 0
  }
  constructor(private veiculoService:VeiculoService, private router : Router, private route: ActivatedRoute) {}

  cancel(): void {  
    this.router.navigate(['veiculos']);
  }
  updateFruta(): void {
    this.veiculoService.update(this.veiculo).subscribe (() =>{
        this.veiculoService.showMessage("Veiculo alterado com sucesso....!!!!!!!!!");
        this.router.navigate(['veiculos']);
      }
    );   
  }
  ngOnInit(): void { 
    const id = this.route.snapshot.paramMap.get('id') || '';    
    this.veiculoService.readById(id).subscribe({
      next: (veiculo: Veiculo) => {
          this.veiculo = veiculo;
      },
      error: (error: any) => {
          // Handle error
      }
    });
   }
}