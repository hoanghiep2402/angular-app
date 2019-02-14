import { Component, OnInit } from '@angular/core';
import { Todos } from '../../../models/todos.class';
import {NgForm} from '@angular/forms';
import {NgModel} from '@angular/forms';


@Component({
  selector: 'app-form-add-job',
  templateUrl: './form-add-job.component.html',
  styleUrls: ['./form-add-job.component.css']
})
export class FormAddJobComponent implements OnInit {

  constructor() { }

  public todo: Todos = new Todos();

  ngOnInit() {
  }

  onSubmitForm(formAddData) {

    console.log(formAddData.value);
  }

}
