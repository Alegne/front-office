import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  endpoint = environment.endpoint;

  constructor(private http: HttpClient) { }

  async postMessage(email: string, objet: string, message: string) {
    const options: any = {
      email : email,
      objet: objet,
      message: message
    };
    const headers: any = new HttpHeaders({'Content-Type': 'application/json'});

    await this.http.post(`${this.endpoint}/newsletter`, options, headers).subscribe(
      (data) => {
      }, (error) => {
          console.log(error);
      }
      );
  }
}
