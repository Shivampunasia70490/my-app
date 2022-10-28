import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers:[NewsService]
})
export class NewsComponent implements OnInit {
  news:any[] =[];
  constructor(private _newsService:NewsService) { }
  
  ngOnInit(): void {
    this._newsService.GetNews().subscribe(Response=>{console.log(Response)
    this.news = Response})
  }

}
