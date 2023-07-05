import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { rooms, roomsList } from './rooms';
import { CkeckComponent } from './ckeck/ckeck.component';
import { RoomsServiceService } from './rooms-service.service';

@Component({
  selector: 'HInvApp-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsComponent implements OnInit {
    name="Lokya Naik";
  @ViewChild("counterTest")child!:CkeckComponent;
  @ViewChild("data")child1!:CkeckComponent;
  //constructor(){}
  isactive=false;
  roomsdata!: rooms;
  
  roomsList: roomsList[]=[]

  
  ngAfterContentInit(): void {
    console.log("called ngAfterContentInit()")
  }
  constructor(private roomService:RoomsServiceService ){}

  ngOnInit(): void {
    this.roomsdata=
  {
      totalRooms:12,
      availableRooms:10
  }
  

  this.roomsList= this.roomService.getRooms();

    console.log("patent init() called!!")
  }
  toggle()
  {
    this.isactive=!this.isactive;
   // this.name="'lokya Naik, you made it bro!"
  }
  addRoom()
    {
      const room: roomsList={
        roomRent:33000,
        roomType:'AC Room',
        checkInDate:new Date(12-2-2023),
        checkOutDate: new Date(12-3-2023)
      }

     this.roomsList=[...this.roomsList,room]
    }
  roomshasselected!: roomsList;
  selectRoom(rooms: roomsList)
  {
    this.roomshasselected=rooms;
  }
  // roomsdata: rooms=
  // {
  //     totalRooms:12,
  //     availableRooms:10
  // }

  // roomsList: roomsList[]=[

  //   {
  //     roomRent:29000,
  //     roomType:'Delux Room',
  //     checkInDate:new Date(12-2-2023),
  //     checkOutDate: new Date(12-3-2023)
  //   }
  // ]
    
  // roomsLocations={
  //   city:"hyd",
  //   state:"ts",
  //   country:"india"
  // }
  inc()
  {
    this.child.inc();

  }
  dec()
  {
    this.child.dec();
  }
}

