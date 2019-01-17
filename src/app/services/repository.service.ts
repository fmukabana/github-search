import { Injectable } from '@angular/core';
import { HttpClient, Headers } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

private username: string;

  constructor(private http: HttpClient) {
    console.log("service is now ready!");
    this.username = 'Mukabana';
   }
   getRepositoryInfo(){
     return this.http.get("https://api.github.com/users/" + this.username);
   }
}