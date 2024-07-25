import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  constructor() { }

  public static APIURL ={

    Employee:{
      AddEmployee:'https://localhoast:5001/api/AddEmployee/'
    },
    Manager:{
      AddManager:'https://localhoast:5001/api/AddManager/',
      GetEmployeeByManager:'https://localhoast:5001/api/GetManagerById/'
    }
  }
}
