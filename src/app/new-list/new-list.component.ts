import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { TransferState } from '@angular/platform-browser';
import { TitleStrategy } from '@angular/router';
import { fromEvent } from 'rxjs';
import { NewsService } from '../news.service';
@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css']
})
export class NewListComponent implements OnInit {

  news : any[]= [];
  constructor(private  _newsService : NewsService) { }


  ngOnInit(): void {
    this._newsService.GetNews().subscribe(response=> 
       {
        // if(response !=undefined && response.length>0)
        // {
      this.news = response;
      console.log(this.news);
      console.log(this.news.length);
       });
//         }
//       },
//       error=>
//       {
//            if(error.status==404)
//            {
//           console.log("Unabe to access")
//            }
//            else if(error.status==403)
// {
// console.log  ("UnAuthorozed")          
//   }
//   else{
//     console.log("Some Server Error")
//   }
//   });
 
}
}