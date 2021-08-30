import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice';
  currentVal='';
  myEvent(evt:String){
    console.log(evt)
    this.currentVal=<string>evt
  }
  username='mansi';
  disabledbox=true;
  enablebox(){
    this.disabledbox=false;
  }
  show=false
  color='blue';
  data=['mansi','arya','dheer']
  dataobj=[
    {
      namee:'mansi',
      age:20
    },
    {
      namee:'manu',
      age:24
    },
    {
      namee:'maanvi',
      age:29
    }
  ]
}
