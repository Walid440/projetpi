import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './feedback/create/create.component';
import { CreateReclamationComponent } from './reclamation/create-reclamation/create-reclamation.component';
 
const routes: Routes = [
  { path: 'createFeed' , component:CreateComponent },
  { path: 'create-reclamation' , component: CreateReclamationComponent},
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
