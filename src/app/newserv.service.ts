import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewservService {
  currentnews:string;
  constructor(private http:HttpClient) { }
  getinterNews(){
    console.log("newsapp")
    console.log(this.http.get(`https://gnews.io/api/v3/search?q=example&token=b090f94c7b840277f3d7208b96239a19`))
    return this.http.get(`https://gnews.io/api/v3/search?q=example&token=b090f94c7b840277f3d7208b96239a19`)
    
  }
  setcurrentnews(title){
    this.currentnews=title;
    console.log("updated");
  }
}
