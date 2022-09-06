import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SearchproviderService } from '../service/searchprovider.service';

@Component({
  selector: 'app-available-service',
  templateUrl: './available-service.component.html',
  styleUrls: ['./available-service.component.css']
})
export class AvailableServiceComponent implements OnInit {

  searchForm:FormGroup

  constructor(private searchProvider: SearchproviderService, private toastr: ToastrService, private router: Router) {
    this.searchForm = new FormGroup({
      pincode: new FormControl(''),
      service: new FormControl('hospital')
    })
    
   }

  ngOnInit(): void {
  }

  hospitalSearch(){
    console.log(this.searchForm.value);
    
    this.searchProvider.searchHospitalApi(this.searchForm.value).subscribe(resp=>{
      console.log(resp);
      
      // if(resp.data.pincode!=null || resp.data.service!=null){
      //   console.log(this.searchForm.value);
      //   this.router.navigateByUrl("/listservice")
      //   this.toastr.success("Service provider found")
      // }else{
      //   this.toastr.error("service provider not found")
      // }
      
    },err=>{
      this.toastr.error("service provider not found")
    })
  }
  
  mechanicSearch(){
    console.log(this.searchForm.value);
    
    this.searchProvider.searchMechanicApi(this.searchForm.value).subscribe(resp=>{
      if(resp.pincode!=null || resp.service!=null){
        console.log(this.searchForm.value);
        this.router.navigateByUrl("/listservice")
        this.toastr.success("Service provider found")
      }else{
        this.toastr.error("service provider not found")
      }
       
    },err=>{
      this.toastr.error("service provider not found")
    })
  }
}
