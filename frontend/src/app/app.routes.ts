import { Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { VeiculosCrudComponent } from './views/veiculos-crud/veiculos-crud.component';
import { VeiculosCreateComponent } from './components/veiculos/veiculos-create/veiculos-create.component';
import { VeiculosUpdateComponent } from './components/veiculos/veiculos-update/veiculos-update.component';
import { VeiculosDeleteComponent } from './components/veiculos/veiculos-delete/veiculos-delete.component';


export const routes: Routes = [
    {
        path:"veiculos/delete/:id",
        component:VeiculosDeleteComponent
    },
    {
         path:"veiculos/update/:id",
        component:VeiculosUpdateComponent
    },
    {
        path : "",
        component :  HomeComponent
    }, 
    {
        path: "veiculos",
        component : VeiculosCrudComponent
    },
    {
        path :"veiculos/create",
        component : VeiculosCreateComponent
    },

];

