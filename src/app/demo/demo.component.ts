import { Component, Input, OnInit } from '@angular/core';
import { roomsList } from '../rooms/rooms';

@Component({
  selector: 'HInvApp-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit{

  @Input() rooms: roomsList[]=[];
 ngOnInit(): void {
   
 }
}
