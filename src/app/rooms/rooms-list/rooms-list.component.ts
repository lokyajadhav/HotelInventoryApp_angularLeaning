import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { roomsList } from '../rooms';

@Component({
  selector: 'HInvApp-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css']
})
export class RoomsListComponent implements OnInit{
  @Input() rooms: roomsList[]=[]
  @Output() roomsSelected= new EventEmitter<roomsList>();
  ngOnInit(): void {
    
  }
  selectRoom(rooms: roomsList)
  {
    this.roomsSelected.emit(rooms)
  }
}
