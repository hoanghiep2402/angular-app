import {Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges, ViewChild} from '@angular/core';
import {Todo} from '../../../models/todo.class';
import {TodoService} from '../../../services/TodoService/todo.service';
import {Observable, Subscription} from 'rxjs';
import {DialogComponent} from '../../dialog/dialog.component';
import {EditTodoDialogComponent} from '../../dialog/edit-todo-dialog/edit-todo-dialog.component';
import {DialogPosition, MatDialog, MatTable} from '@angular/material';
import {NgxSpinnerService} from 'ngx-spinner';
import * as _ from 'lodash';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})


export class DataTableComponent implements OnInit, OnChanges {

  public todos: Todo[] = [];
  public dataSource: Todo[];
  public spinnerShow = true;
  @ViewChild(MatTable) table: MatTable<any>;

  constructor(
    public todoService: TodoService,
    public dialog: MatDialog,
    private spinner: NgxSpinnerService,

    ) { }


  @Input('formShow') tableWidth = false;
  @Input('todoAdded') todoAdded: Todo;

  public displayedColumns: string[] = ['_id', 'name', 'time', 'status', 'tool'];


  public subscription: Subscription;


  ngOnInit() {
      this.spinner.show();
      this.loadData();
      this.dataSource = this.todos;

  }

  ngOnChanges(changes: { [propName: string]: SimpleChange }) {
   if ( changes['todoAdded'] && !changes['todoAdded'].firstChange) {
        this.spinner.show();
        this.todos.push(this.todoAdded);
        this.dataSource = this.todos;
        this.spinner.hide();
        this.table.renderRows();
   }


  }


  // change status
  onCompleted(ele): void {

     const newDataSource = this.dataSource.map((item) => {
         if (item._id === ele._id) {
           ele.status = !ele.status;
           this.todoService.updateTodo(ele).subscribe((data) => {
             if (data.status === 200) {
               //do something
             }
           });
           return ele;
         } else {
           return item;
         }
     });


     this.dataSource = newDataSource;
  }

  public loadData() {

   this.subscription = this.todoService.getAllTodo().subscribe(data => {

        this.todos = this.dataSource  = data;
        this.spinner.hide();
   }, err => {

    console.log(err);

   });

  }

  onEdit(todo: Todo) {
    this.dialog.open(EditTodoDialogComponent, {
      height: '55%',
      width: '60%',
      position: { top: '50px' },
      data: todo
    }).beforeClosed().subscribe((data) => {
        const indexUpdate = _.findIndex(this.todos, (todo) => {
          return todo._id === data._id;
        });


        this.todos[indexUpdate] = data;
        this.dataSource = this.todos;
        this.table.renderRows();
    });

  }

  onDelete(todo: Todo) {
     this.dialog.open(DialogComponent,
       {
         height: '200px',
         width: '450px',
         data: {
            nameDialog: 'Delete',
            typeDialog: 'YesNoDialog',
            message: `Are You Sure To Delete ${todo.name} ?`,
            todo
         }
       },

       ).beforeClosed().subscribe(data => {
         if (data.confirm) {
             _.remove(this.todos, data.todo);
            this.dataSource = this.todos;
            this.table.renderRows();
         }
     });
  }


}
