import {Component, Input, OnInit} from '@angular/core';



export interface PeriodicElement {
  name: string;
  id: number;
  time: Date;
  status: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Hoc bai', time: new Date(), status: false},
  {id: 2, name: 'Learning English', time: new Date(), status: false},

];


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})


export class DataTableComponent implements OnInit {


  constructor() { }
  @Input('formShow') tableWidth = false;

  public displayedColumns: string[] = ['id', 'name', 'time', 'status', 'tool'];
  public dataSource = ELEMENT_DATA;

  ngOnInit() {
    console.log(this.tableWidth);
  }

  onFinished(ele): void {
     const newDataSource = this.dataSource.map((item) => {
         if (item.id === ele.id) {
           ele.status = !ele.status;
           return ele;
         } else {
           return item;
         }
     });
     this.dataSource = newDataSource;
  }

}
