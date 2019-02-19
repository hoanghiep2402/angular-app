import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../../../models/todo.class';
import {TodoService} from '../../../services/TodoService/todo.service';
import {Subscription} from 'rxjs';
import {DialogComponent} from '../../dialog/dialog.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})


export class DataTableComponent implements OnInit {


  public todos: Todo[] = [];
  public dataSource: Todo[];

  constructor(
    public todoService: TodoService,
    public dialog: MatDialog,

    ) { }


  @Input('formShow') tableWidth = false;

  public displayedColumns: string[] = ['_id', 'name', 'time', 'status', 'tool'];


  public subscription: Subscription;


  ngOnInit() {
    this.loadData();
     this.dataSource = this.todos;

  }



  // change status
  onCompleted(ele): void {


     const newDataSource = this.dataSource.map((item) => {
         if (item._id === ele._id) {
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

  onDelete(todo: Todo) {
     this.dialog.open(DialogComponent,
       {
         height: '300px',
         width: '400px',

       }
       );
  }


}
