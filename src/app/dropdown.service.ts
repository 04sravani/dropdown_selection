import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private _http:HttpClient) { }

  countries(){
    return[
      {
        id:1,
        name:"INDIA",
      },
      {
        id:2,
        name:"AUSTRALIA",
      },
      {
        id:3,
        name:"US",
      },
     
    ]
  }
  states(){
    return[
      {
        id:1,
        name:"hyderabad",
      },
      {
        id:1,
        name:"TamilNadu",
      },
      {
        id:1,
        name:"banglore",
      },
      {
        id:2,
        name:"Queensland",
      },
      {
        id:2,
        name:"South Australia",
      },
      {
        id:2,
        name:"Victoria",
      },
      {
        id:3,
        name:"alaska",
      },
      {
        id:3,
        name:"texas",
      }
    ]
  }
}
