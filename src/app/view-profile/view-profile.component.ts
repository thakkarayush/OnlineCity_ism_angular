import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SessionService } from '../service.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

  constructor(private sessionService:SessionService) { }
  userData: Array<any> = []
  
  ngOnInit(): void {
    var userId = (localStorage.getItem('userId'));
    this.sessionService.userDetail(userId).subscribe(resp=>{
      console.log(resp.firstName);
      this.userData=resp
      console.log("array");
      console.log(this.userData);
      
      
    })
  }

}
