import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private _httpClient: HttpClient) { }

  GetNews() 
  {
    return this._httpClient.get<any[]>("http://localhost:3000/articles")
  }
}
