
 export enum MessType {
  error,
  success,

}

export class Message {

  constructor(
    public messType: MessType,
    public message: string
) {

  }

}
