import { Component, OnInit } from '@angular/core';
import { HttpDemoService } from './http-demo.service';

@Component({
  selector: 'HInvApp-http-demo',
  templateUrl: './http-demo.component.html',
  styleUrls: ['./http-demo.component.css']
})
export class HttpDemoComponent implements OnInit {
  data!: any;
  constructor(private httpService: HttpDemoService ){}
ngOnInit(): void {
 this.httpService.getData().subscribe ((rooms)=>{
  this.data=rooms;
  });
}
}
