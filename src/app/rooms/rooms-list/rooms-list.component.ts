import { AfterContentInit, AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, QueryList, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { roomsList } from '../rooms';

@Component({
  selector: 'HInvApp-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, AfterViewInit{
 

  @ViewChildren("test")message!:QueryList<any>;
  @Input() rooms: roomsList[]=[]
  @Input() name: String='';
 
  @Output() roomsSelected= new EventEmitter<roomsList>();
  constructor(){}
  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {
    this.message.first.nativeElement.style.color="red"
    this.message.last.nativeElement.style.color="green"
  }
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(changes)
  //   if(changes['name'])
  //   {
  //     this.name=changes['name'].currentValue.toUpperCase();
  //   }
  // }
  selectRoom(rooms: roomsList)
  {
    this.roomsSelected.emit(rooms)
  }
  
}
