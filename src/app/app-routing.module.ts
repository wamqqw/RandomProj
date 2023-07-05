import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlipComponent } from './flip/flip.component';

const routes: Routes = [
  {path:'flip', component:FlipComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
