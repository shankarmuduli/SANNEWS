import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewservService {
  currentnews:string;
  constructor(private http:HttpClient) { }
  getinterNews(country){
    console.log("newsapp")
    console.log(this.http.get(`http://newsapi.org/v2/top-headlines?country=in&apiKey=79d4da922c714958acf7143f2bf5540e`))
    return this.http.get(`http://newsapi.org/v2/top-headlines?country=${country}&apiKey=79d4da922c714958acf7143f2bf5540e`)
    
  }
  setcurrentnews(title){
    this.currentnews=title;
    console.log("updated");
  }
}
