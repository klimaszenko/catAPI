import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  
  getData(){
    let headers = new Headers;
    headers.append('x-api-key', '635a274e-3078-4db9-9161-fa75a44e083c');
    let apiURL:string = 'https://api.thecatapi.com/v1/images/search';
    
    return this.http.get(apiURL, headers).subscribe(
      data => {console.log(data[0].url); 
              this.link = data[0].url;
              console.log(this.link);
            },
      err  => console.log("Error")
      );

  }


}
