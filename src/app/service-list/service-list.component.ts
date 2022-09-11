import { Component, OnInit } from '@angular/core';
import { SearchproviderService } from '../service/searchprovider.service';
import { AvailableServiceComponent } from '../available-service/available-service.component';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {
  searchForm:FormGroup
  bookAppointment:FormGroup

  constructor(private searchProvider: SearchproviderService, private toastr: ToastrService) {
    this.searchForm = new FormGroup({
      pincode: new FormControl(''),
      service: new FormControl('')
    })

    this.bookAppointment= new FormGroup({
      providerId: new FormControl(''),
      users: new FormControl('')
    })
   }

  availableService: Array<any> = []
  ngOnInit(): void {
    let pincode = localStorage.getItem("pincode") as string
    let service = localStorage.getItem("servicevalue") as string
    console.log(pincode);
    console.log(service);
    this.searchForm.value.pincode=pincode
    this.searchForm.value.service=service    
    this.searchProvider.searchServiceApi(this.searchForm.value).subscribe(resp=>{
      // console.log("hello"+resp);
      console.log(resp);
      
         this.toastr.success("Service provider found")
         this.availableService = resp
          console.log("array",this.availableService);
          localStorage.setItem("providerId",resp.providerId)
         
    },err=>{
      this.toastr.error("service provider not found")
    })
    
  }

  book(){

  console.log("booked")
   this.searchForm.value.users=JSON.parse(localStorage.getItem("response") || '{}')
   console.log(this.searchForm.value.users);
   
   this.searchProvider.boobAppointmentApi(this.bookAppointment.value).subscribe(resp=>{
    console.log(this.searchForm.value.userId);
    console.log(this.searchForm.value.providerId);
    console.log(resp);
    
      this.toastr.success("your appointment is booked")
    })
    
  }

}
