import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Veiculo } from '../veiculo.model';
import { VeiculoService } from '../veiculo.service';
import { MatTableModule } from '@angular/material/table';
import { CommonModule, CurrencyPipe, registerLocaleData } from '@angular/common';
import locatePt from '@angular/common/locales/pt';

registerLocaleData(locatePt)

@Component({
  selector: 'app-veiculos-read',
  standalone: true,
  imports: [ RouterModule, MatTableModule, CurrencyPipe, CommonModule],
  templateUrl: './veiculos-read.component.html',
  styleUrl: './veiculos-read.component.css',
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ]
})
export class VeiculosReadComponent implements OnInit {
  veiculos : Veiculo[];
  displayedColumns: string[] = ['id', 'nome', 'preco', 'action']; 


  constructor(private veiculoService : VeiculoService) {
    this.veiculos = []; // Inicializando como um array vazio    
  } 

  ngOnInit(): void {
    this.veiculoService.read().subscribe(veiculos => {
      this.veiculos = veiculos;
      console.log(veiculos);
    })
  }
}
