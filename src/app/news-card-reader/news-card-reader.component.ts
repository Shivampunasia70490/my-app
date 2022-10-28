import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-news-card-reader',
  templateUrl: './news-card-reader.component.html',
  styleUrls: ['./news-card-reader.component.css']
})
export class NewsCardReaderComponent implements OnInit {

   @Input()
   newsItem : any;
  constructor() { }

  ngOnInit(): void {
  }

}
