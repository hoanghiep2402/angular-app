import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Todo} from '../../models/todo.class';
import {catchError, tap} from 'rxjs/operators';
import {MessageService} from '../MessageService/message.service';
import {Message, MessType} from '../../models/message.class';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {

  }


  private api = 'http://localhost:10000/todos';



  public getAllTodo(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.api);
  }

  public postTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.api, todo).pipe(
      tap((newTodo: Todo) => {
        const successMessage = new Message(MessType.success, 'Todo Created Successfull!');
        console.log(successMessage);
        this.log(successMessage);
      } ),
      catchError(this.handleError<Todo>('Add Hero'))
      );


  }



  // #region HandeError

  private handleError<T> (errType, result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      const errMessage = new Message(MessType.error, `${errType} failed: ${error.message}`)

    this.log(errMessage);

    return of( result as T);
  };
}

  // #endregion HandeError




  //region log
  // log a message
  private log(message) {
      this.messageService.add(message);
  }
  //endregion
}
