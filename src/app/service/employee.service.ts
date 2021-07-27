import { Employee } from './../newemp/employee';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
      private apiServerUrl=environment.apiBasUrl;
  constructor(private http:HttpClient) { }
  public getEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.apiServerUrl+'employee/all');
}
public addEmployees(employee:Employee): Observable<Employee>{
    return this.http.post<Employee>(this.apiServerUrl+'employee/add',employee);
}
public updateEmployees(employee:Employee): Observable<Employee>{
    return this.http.put<Employee>(this.apiServerUrl+'employee/update',employee);
}
public deleteEmployees(employeeid:number): Observable<void>{
    return this.http.delete<void>(this.apiServerUrl+'employee/delete/'+employeeid);
//return this.http.delete<void>('${this.apiServerUrl}/employee/delete/${employeeid}');
}
}