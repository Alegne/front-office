import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationsService {
  endpoint = environment.endpoint;

  constructor(private http: HttpClient) { }

  getConfigurations() {
    return this.http.get(`${this.endpoint}/configurations`);
  }
}
