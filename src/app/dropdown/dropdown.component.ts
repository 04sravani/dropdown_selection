import { Component, OnInit } from '@angular/core';
import { DropdownService } from '../dropdown.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  countryName:any=[];
  stateName:any=[]
  constructor(private dropdown:DropdownService) { }

  ngOnInit(): void {
    this.countryName = this.dropdown.countries()
    console.log(this.countryName)
  }
  countryToState(state:any){
//console.log(state.target.value)
this.stateName = this.dropdown.states().filter(data=>data.id==state.target.value)
console.log(this.stateName)
//this.stateName = this.dropdown.states()
//console.log(this.stateName)
  }
}
