import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Todo} from '../models/todo.class';

@Injectable({
  providedIn: 'root'
})
export class TodoService {


  private api = 'http://localhost:10000/todos';
  constructor( private http: HttpClient) {

  }


  getAllTodo(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.api);
  }
}
