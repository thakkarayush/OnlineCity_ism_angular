import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-provider-dashboard',
  templateUrl: './provider-dashboard.component.html',
  styleUrls: ['./provider-dashboard.component.css']
})
export class ProviderDashboardComponent implements OnInit {

  constructor() { }
  firstName:string="" 
  ngOnInit(): void {
    this.firstName = localStorage.getItem("firstName") as string
  }

}
