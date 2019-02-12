import { Component, OnInit } from '@angular/core';
import {element} from 'protractor';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  status: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hoc bai', weight: '12/2/2019', status: false},

];


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})


export class DataTableComponent implements OnInit {

  constructor() { }

  public displayedColumns: string[] = ['position', 'name', 'weight', 'status'];
  public dataSource = ELEMENT_DATA;

  ngOnInit() {
  }

}
