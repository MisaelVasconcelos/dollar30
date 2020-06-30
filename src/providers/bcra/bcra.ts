import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class BcraProvider {
  //token


  constructor(public http: HttpClient) {
    console.log('Hello BcraProvider Provider');
  }
  getvalues() {
    var url = "https://free.currconv.com/api/v7/convert?q=USD_ARS&compact=ultra&apiKey=5f6c7de6a894dc38fbb9"
    return this.http.get(url)
      .toPromise()
      .then(response => response)
      .catch(e => e);
  }
}
