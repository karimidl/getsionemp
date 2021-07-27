import { EmplComponent } from './empl/empl.component';
import { NewempComponent } from './newemp/newemp.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
          path:'newemployee' , component:NewempComponent
  },
  {
    path:'employee',component:EmplComponent
  },{
    path:'',redirectTo:'/employee',pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
