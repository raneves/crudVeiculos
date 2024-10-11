import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'
import { Veiculo } from './veiculo.model';
import { Observable } from 'rxjs';
import { EMPTY,  catchError, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  baseUrl = "http://localhost:3001/veiculos";

  constructor(private snackBar : MatSnackBar, private http: HttpClient) { }

  errorHandler(e : any): Observable<any>{
    console.log(e);
    this.showMessage("Ocorreu um erro!");
    return EMPTY;
  }

  delete(veiculo : Veiculo) : Observable<Veiculo>{
    const url = `${this.baseUrl}/${veiculo.id}`;
    return this.http.delete<Veiculo> (url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  readById(id: string) : Observable<Veiculo>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Veiculo> (url);
  }

  update (veiculo : Veiculo) : Observable<Veiculo> {
    const url = `${this.baseUrl}/${veiculo.id}`;
    return this.http.put<Veiculo>(url, veiculo);
  }

  create (veiculo : Veiculo) : Observable<Veiculo>{
    return this.http.post<Veiculo>(this.baseUrl, veiculo);
    }

  read() :Observable<Veiculo[]>{
      return this.http.get<Veiculo[]>(this.baseUrl);
  }

  showMessage(msg: string): void{
    this.snackBar.open(msg, '', {
      duration : 3000,
      horizontalPosition : "right",
      verticalPosition : "top"
    })
  }

  showOnConsole(msg: String): void{
    console.log(msg);
  }
}