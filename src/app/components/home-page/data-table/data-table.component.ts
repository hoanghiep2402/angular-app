import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../../../models/todo.class';
import {TodoService} from '../../../services/todo.service';
import {Subscription} from 'rxjs';


// const ELEMENT_DATA: Todo[] = [
//   {id: 1, name: 'Hoc bai', time: new Date(), status: false},
//   {id: 2, name: 'Learning English', time: new Date(), status: false},
//
// ];


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})


export class DataTableComponent implements OnInit {


  public todos: Todo[] = [];
  public dataSource: Todo[];
  constructor( public todoService: TodoService ) { }
  @Input('formShow') tableWidth = false;

  public displayedColumns: string[] = ['_id', 'name', 'time', 'status', 'tool'];


  public subscription: Subscription;


  ngOnInit() {
    this.loadData();
     this.dataSource = this.todos;

  }



  // change status
  onFinished(ele): void {
     const newDataSource = this.dataSource.map((item) => {
         if (item._id === ele.id) {
           ele.status = !ele.status;
           return ele;
         } else {
           return item;
         }
     });
     this.dataSource = newDataSource;
  }

  public loadData() {

   this.subscription = this.todoService.getAllTodo().subscribe(data => {

        this.todos = this.dataSource = this.todos = data;

   }, err => {

    console.log(err);

   });



  }
}
