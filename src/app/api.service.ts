import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  apiURL:string = 'https://api.thecatapi.com/v1/images/search';
  apiURLgif:string = 'https://api.thecatapi.com/v1/images/search?mime_types=gif';  
  selectedAPI:string = this.apiURLgif;

  getData(){
    let headers = new Headers;
    headers.append('x-api-key', '635a274e-3078-4db9-9161-fa75a44e083c');
     
    return this.http.get(this.selectedAPI, headers).subscribe(
      data => {console.log(data[0].url); 
              this.link = data[0].url;
              console.log(this.link);
            },
      err  => console.log("Error")
      );
  }

  setAPIurl(gifsAreSelected){
    if(gifsAreSelected){
      this.selectedAPI = this.apiURLgif;
    }
    else{
      this.selectedAPI = this.apiURL;
    }
    this.getData();
    console.log(this.selectedAPI);

  }

 
}
