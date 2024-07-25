import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConstantsService } from "src/app/Shared/Services/ConstantsService";

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor() { }

  addManager(data) {
    return this.ConstantsService.APIURL.Manager.AddManager, data, ConstantsService.APIMETHOD.POST;
  }

  getEmployeeByManagerId(Id){
    return this.ConstantsService.APIURL.Manager.GetEmployeeByManager, Id, ConstantsService.APIMETHOD.POST;
  }
}
