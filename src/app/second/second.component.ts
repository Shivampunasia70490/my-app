import { Component} from "@angular/core";

@Component({
   selector: 'second-app',
   template : '<h1>Second Template</h1>',
   styleUrls : ['./second.component.css'] 
})

export class secondcomp{
  title : String = 'Second String';
}  