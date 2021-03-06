import { Component, OnInit } from '@angular/core';
import { ErrorSuccessNpmService } from '../../projects/error-success-npm/src/lib/error-success-npm.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'error-success-npm';
  titleEl: HTMLElement

  constructor(private errorSuccessMsg: ErrorSuccessNpmService){
    

  }

  ngOnInit(): void {
    this.titleEl = document.getElementById('title');
    this.test();
  }

  test(){
    this.errorSuccessMsg.centeredPopOverMsg("This is a test error", 2000);
  }

  
  
  
}
