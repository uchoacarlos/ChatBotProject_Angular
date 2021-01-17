import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  //private baseURL: string = "https://dialogflow.googleapis.com/$discovery/rest?version=v2beta1";
  //private token: string = 'AIzaSyBvV4W7FZMOlMiKT0dRw2ucBr6qsoKiK30';

  private baseURL: string = "https://api.dialogflow.com/v1/query?v=20150910";
  private token: string = 'e228c76aa6a54ce9b14a33b0980aacdf';

 // Chave API ChatBot = AIzaSyBvV4W7FZMOlMiKT0dRw2ucBr6qsoKiK30 //


  constructor(private http: HttpClient) { }

  public getHeaders() {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${this.token}`);
    return headers;
  }

  public talk(query: string) {
    
    let data = {
      "lang": "pt-br",
      "query": query,
      "sessionId": "12345" 
    }

    return this.http
      .post(`${this.baseURL}`, data, { headers: this.getHeaders() })
  }

}
