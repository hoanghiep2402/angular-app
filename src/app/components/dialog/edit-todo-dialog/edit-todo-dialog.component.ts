import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Todo} from '../../../models/todo.class';
import {MAT_DIALOG_DATA} from '@angular/material';
import {TodoService} from '../../../services/TodoService/todo.service';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-edit-todo-dialog',
  templateUrl: './edit-todo-dialog.component.html',
  styleUrls: ['./edit-todo-dialog.component.css']
})
export class EditTodoDialogComponent implements OnInit {

  public formEdit: FormGroup;


  constructor(
    private _frmBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public todo: Todo,
    private todoService: TodoService,
    private matDialogRef: MatDialogRef<EditTodoDialogComponent>
  ) {

  }

  ngOnInit() {
    this.createForm();
    this.todo = this.formEdit.value;
  }

  createForm() {
    this.formEdit = this._frmBuilder.group( {

      name: [this.todo.name, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(40),
        Validators.pattern('^[A-Za-zÀ-ÿ0-9 ,.\'-]+$')
      ]],

      time: [this.todo.time, [Validators.required]],

      status: [this.todo.status , [Validators.required]],

      _id: [this.todo._id ]

    });
  }


  onSubmitForm() {

      if (this.formEdit.valid) {
        if (this.todo === this.formEdit.value) {
          this.matDialogRef.close();
          return;
        }
          this.todoService.updateTodo(this.formEdit.value).subscribe((data) => {
           if (data.status === 200) {
            this.todo = this.formEdit.value;
             this.matDialogRef.close(this.todo);
           }
          });

      }
  }

}
