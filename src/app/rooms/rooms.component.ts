import { Component, OnInit } from '@angular/core';
import { rooms, roomsList } from './rooms';

@Component({
  selector: 'HInvApp-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
    name="Lokya Naik";

  //constructor(){}
  isactive=false;
  roomsdata!: rooms;
  
  roomsList: roomsList[]=[]
  ngOnInit(): void {
    this.roomsdata=
  {
      totalRooms:12,
      availableRooms:10
  }

  this.roomsList=[

      {
        roomRent:29000,
        roomType:'Delux Room',
        checkInDate:new Date(12-2-2023),
        checkOutDate: new Date(12-3-2023)
      }
    ]

    
  }
  toggle()
  {
    this.isactive=!this.isactive;
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
}

