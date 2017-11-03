import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent  {
  title = 'app';

  rows: any[] = [];
  showEditable: boolean = false;
  editRowId: any;

  constructor() { 
    this.rows = arr;
  }
  
  addRow() {
    let indexForId = this.rows.length+1
    this.rows.push({
      id: indexForId, name: ''
    })
  }
  
  toggle(val){
    this.editRowId = val;
  }
}

export const arr = [  
  {
    id: 1,
    name: 'one'
  },
  {
    id:2,
    name: 'two'
  }
];
