import { Employee } from './../empl/employee';
import { HttpErrorResponse } from '@angular/common/http';
import { EmployeeService } from './../service/employee.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newemp',
  templateUrl: './newemp.component.html',
  styleUrls: ['./newemp.component.css']
})
export class NewempComponent implements OnInit {

  public employees: Employee[];
  employee:Employee;

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
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
  public onAddEmployee(){

    this.employeeService.addEmployees(this.employee).subscribe(
      (response:Employee)=>{
        console.log(response);
        this.getEmployees();

      },
      (error:HttpErrorResponse)=>{
        alert(error.message);

      }
    );
  }
   /* saveemployee(){
      this.employeeService.addEmployees().subscribe(
        (response:Employee)=>{
          console.log(response);
          this.getEmployees();

        },
        (error:HttpErrorResponse)=>{
          alert(error.message);

        }
      )
    }*/
 /* public onAddEmployee(){
    console.log('hi');
  }*/
}
