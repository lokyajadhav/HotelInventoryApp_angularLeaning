import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'HInvApp-ckeck',
  templateUrl: './ckeck.component.html',
  styleUrls: ['./ckeck.component.css']
})
export class CkeckComponent implements OnInit {
  public counter: number=0;
  ngOnInit(): void {
    
  }
  inc()
  {
    this.counter++;
  
  }
  dec()
  {
    this.counter--;
  }

}
