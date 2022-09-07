import { Component, OnInit } from '@angular/core';
import { SearchproviderService } from '../service/searchprovider.service';
import { AvailableServiceComponent } from '../available-service/available-service.component';
@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {

  constructor(private providerservices:AvailableServiceComponent) { }
   services:String=''
   //services = JSON.parse(this.service)
  ngOnInit(): void {
    
    this.services =JSON.parse(localStorage.getItem('availableservice') || '{}');
     //console.log('service:',JSON.parse(service));
    const userJson = localStorage.getItem('availableservice');
    let currentUser = JSON.parse(localStorage.getItem('availableservice') || '{}');
    console.log(currentUser);
    // console.log(JSON.parse(localStorage.getItem('availableservice') as string));
    
    
  }

}
