import { Component } from '@angular/core';
import { Veiculo } from '../veiculo.model';
import { VeiculoService } from '../veiculo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-veiculos-delete',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule,
    FormsModule, MatSnackBarModule, HttpClientModule],
  templateUrl: './veiculos-delete.component.html',
  styleUrl: './veiculos-delete.component.css'
})
export class VeiculosDeleteComponent {
  veiculo : Veiculo = {
    nome : '',
    preco: 0
  }
  constructor(private veiculoService:VeiculoService, private router : Router, private route: ActivatedRoute) {}

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
   deleteFruta(): void {
    this.veiculoService.delete(this.veiculo).subscribe (() =>{
        this.veiculoService.showMessage("Veiculo Removido com sucesso....!!!!!!!!!");
        this.router.navigate(['veiculos']);
      }
    )  
  }
  cancel(): void {  
    this.router.navigate(['veiculos']);
  }  
}
