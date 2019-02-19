import {Component, OnInit, OnDestroy, EventEmitter, Output} from '@angular/core';
import { Todo } from '../../../models/todo.class';
// import {NgForm} from '@angular/forms';
// import {NgModel} from '@angular/forms';
import {TodoService} from '../../../services/TodoService/todo.service';


@Component({
  selector: 'app-form-add-job',
  templateUrl: './form-add-job.component.html',
  styleUrls: ['./form-add-job.component.css']
})
export class FormAddJobComponent implements OnInit {

  constructor(  public todoService: TodoService) { }

  public todo: Todo = new Todo();
  @Output('CloseForm')
  onCloseFormShow = new EventEmitter<boolean>();

  ngOnInit() {

  }



  onSubmitForm(formAddData) {

    if (formAddData.valid) {
      console.log(formAddData.value);
     this.todoService.postTodo(formAddData.value).subscribe(
       (data) => {
         formAddData.reset();
         this.closeForm();
       }
     );
    }
  }

  closeForm() {

    this.onCloseFormShow.emit(false);
  }

}
