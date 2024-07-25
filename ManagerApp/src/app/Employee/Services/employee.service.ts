import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConstantsService } from "src/app/Shared/Services/ConstantsService";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  addEmployee(data) {
    return this.ConstantsService.APIURL.Employee.AddEmployee, data, ConstantsService.APIMETHOD.POST;
  }
}
