import { ArchivedEmplyeeComponent } from './employee/archived-emplyee/archived-emplyee.component';
import { EmployeeService } from './service/employee.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmplyeeComponent } from './employee/add-emplyee/add-emplyee.component';
import { ListEmplyeeComponenet } from './employee/list-emplyee/list-emplyee.component';
import { EditEmplyeeComponent } from './employee/edit-emplyee/edit-emplyee.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ClickDirective } from './click.directive';

@NgModule({
  declarations: [
    AppComponent,
    AddEmplyeeComponent,
    EditEmplyeeComponent,
    ListEmplyeeComponenet,
    ArchivedEmplyeeComponent,
    ClickDirective,
  ],
  imports: [
    BrowserModule,HttpClientModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
