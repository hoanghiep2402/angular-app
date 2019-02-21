import {Component, Inject, OnInit, EventEmitter, Output} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Todo} from '../../models/todo.class';
import {TodoService} from '../../services/TodoService/todo.service';



@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})


export class DialogComponent implements OnInit {

  nameDialog: string;
  message: string;
  confirm: boolean;
  todo: Todo;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<DialogComponent>,
    private todoService: TodoService
  ) {

  }


  ngOnInit() {
    this.message = this.data.message;
    this.nameDialog = this.data.nameDialog;

  }


  onConfirm() {

    this.todoService.deleteTodo(this.data.todo._id).subscribe(res => {
      if (res) {
        const data = {
          todo: this.data.todo,
          confirm: true
        };
        this.dialogRef.close(data);

      } else {

        this.closeFormInternal();

      }
    });

  }

  closeFormInternal() {
    setInterval(() => {
      this.dialog.closeAll();
    }, 3000);
  }

  onRefuse() {

  }



}
