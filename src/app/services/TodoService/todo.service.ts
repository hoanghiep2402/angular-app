import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Todo} from '../../models/todo.class';
import {catchError, tap} from 'rxjs/operators';
import {MessageService} from '../MessageService/message.service';
import {Message, MessType} from '../../models/message.class';
import {timeout} from 'rxjs/operators';


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



  //region get all todos
  public getAllTodo(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.api);
  }
  //endregion



  //region post todo
  public postTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.api, todo).pipe(
      tap((newTodo: Todo) => {
        const successMessage = new Message(MessType.success, 'Todo Created Successfull!');
        this.log(successMessage);
      } ),
      catchError(this.handleError<Todo>('Add Hero'))
      );


  }
  //endregion



  public deleteTodo(id: string): Observable<any> {

    return this.http.delete<any>(`${this.api}/${id}`, {observe: 'response'}).pipe(
      catchError(
        this.handleError('Delete failed!')
      )
    );
  }

    public updateTodo(todo: Todo): Observable<any> {
    return this.http.put<any>(`${this.api}/${todo._id}`, todo, {observe: 'response'}).pipe(
      catchError(
        this.handleError('Update Failed!')
      )
    );
    }

  // region HandleError

  private handleError<T> (errType?, result?: T) {
    return (error: any): Observable<T> => {


      const errMessage = new Message(MessType.error, `${errType} ${error.error.message}`);

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
