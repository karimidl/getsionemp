import { ListEmplyeeComponenet } from './employee/list-emplyee/list-emplyee.component';
import { AddEmplyeeComponent } from './employee/add-emplyee/add-emplyee.component';
import { EditEmplyeeComponent } from './employee/edit-emplyee/edit-emplyee.component';
import { ArchivedEmplyeeComponent } from './employee/archived-emplyee/archived-emplyee.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'addEmplyee',
    component: AddEmplyeeComponent,
  },
  {
    path: 'editEmplyee/:id',
    component: EditEmplyeeComponent,
  },
  {
    path: 'archivedEmplyee',
    component: ArchivedEmplyeeComponent,
  },
  {
    path: 'listEmplyee',
    component: ListEmplyeeComponenet,
  },
  {
    path: '',
    redirectTo: '/listEmplyee',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
