import { Component } from '@angular/core';
import { EmployeeService} from 'src/app/Shared/Services/EmployeeService'

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {

  constructor(private employeeService: EmployeeService,){

  }

  employeedata = [];
  eleBu = new createEmployeeList();

  addBusinessUnit() {
    const ele = {
      EmpId: 0,
      EmpName: this.EmployeeForm.value.EmpNameName.toUpperCase(),
      Salary: this.EmployeeForm.value.Salary,
    };
    this.employeedata.push(ele);
    this.eleBu.createEmployeeList = this.employeedata;
    this.employeeService.addEmployee(this.eleBu).subscribe((response:any) => {  
    })
}

}
