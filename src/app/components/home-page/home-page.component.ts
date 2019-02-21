import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../../models/todo.class';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

    isShowForm = false;
     todo: Todo;
  ngOnInit() {
  }

  onAddTodo(todo: Todo) {
      this.todo = todo ;
  }

  onChange(): void {
      this.isShowForm = !this.isShowForm;

  }

}
