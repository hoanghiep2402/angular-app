import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }
  messages: string[] = [];

  //region add
  /*
  @param message={
    @param messType:{ --- kind of message in model
      0:error,
      1:success

      ...add more
    },
    @param message: string -message display
  }
   */
  add(message) {
    this.messages.push(message);
  }
  //endregion


  clear() {

    this.messages = [];
  }
}
