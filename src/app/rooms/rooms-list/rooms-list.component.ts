import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { roomsList } from '../rooms';

@Component({
  selector: 'HInvApp-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges{
  @Input() rooms: roomsList[]=[]
  @Input() name: String='';
  @Output() roomsSelected= new EventEmitter<roomsList>();
  ngOnInit(): void {
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    if(changes['name'])
    {
      this.name=changes['name'].currentValue.toUpperCase();
    }
  }
  selectRoom(rooms: roomsList)
  {
    this.roomsSelected.emit(rooms)
  }
  
}
