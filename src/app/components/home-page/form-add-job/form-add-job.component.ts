import { Component, OnInit, OnDestroy } from '@angular/core';
import { Todo } from '../../../models/todo.class';
// import {NgForm} from '@angular/forms';
// import {NgModel} from '@angular/forms';
import {TodoService} from '../../../services/todo.service';


@Component({
  selector: 'app-form-add-job',
  templateUrl: './form-add-job.component.html',
  styleUrls: ['./form-add-job.component.css']
})
export class FormAddJobComponent implements OnInit {

  constructor() { }

  public todo: Todo = new Todo();
  public todoService: TodoService;

  ngOnInit() {

  }



  onSubmitForm(formAddData) {

    if (formAddData.valid) {
      console.log(formAddData.value);
    }
  }

}
