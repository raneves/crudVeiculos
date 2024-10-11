import { MatButtonModule } from '@angular/material/button';
import { Veiculo } from './../veiculo.model';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { VeiculoService } from '../veiculo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-veiculos-create',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule,
    FormsModule, MatSnackBarModule, HttpClientModule],
  templateUrl: './veiculos-create.component.html',
  styleUrl: './veiculos-create.component.css'
})
export class VeiculosCreateComponent implements OnInit{
  veiculo : Veiculo = {
    nome : '',
    preco: 0
  }
  constructor(private veiculoService:VeiculoService, private router : Router) {}

  cancel(): void {  
    this.router.navigate(['veiculos']);
  }
  createVeiculo(): void { 
    this.veiculoService.create(this.veiculo).subscribe (() =>{
      this.veiculoService.showMessage("Veículo criado com sucesso....!!!!!!!!!");
      this.router.navigate(['veiculos']);
    }
    );
  }
  ngOnInit(): void {  }
}
