import { Injectable } from '@angular/core';
import { roomsList } from './rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsServiceService {

  roomslist: roomsList[]=[]
  constructor() { }
  getRooms(){
    this.roomslist=[

      {
        roomRent:29000,
        roomType:'Delux Room',
        checkInDate:new Date(12-2-2023),
        checkOutDate: new Date(12-3-2023)
      },
      {
        roomRent:229000,
        roomType:'AC Room',
        checkInDate:new Date(12-2-2023),
        checkOutDate: new Date(12-3-2023)
      }
    ]
    return this.roomslist;
  }
}

