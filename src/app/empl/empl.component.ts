import { HttpErrorResponse } from '@angular/common/http';
import { EmployeeService } from './../service/employee.service';
import { Employee } from './../newemp/employee';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-empl',
  templateUrl: './empl.component.html',
  styleUrls: ['./empl.component.css']
})
export class EmplComponent implements OnInit {

  public employees: Employee[];
  public editemployee:Employee;

  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {
    this.getEmployees();

  }
  public getEmployees():void{
    this.employeeService.getEmployees().subscribe(
      (response:Employee[])=>{
        this.employees=response;

      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }



}
