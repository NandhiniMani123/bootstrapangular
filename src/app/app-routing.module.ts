import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogpostComponent } from './templatecomponents/blogpost/blogpost.component';

const routes: Routes = [
  {
    path:"", component:BlogpostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
