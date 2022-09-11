import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProviderServiceService } from 'src/app/service/provider-service.service';

@Component({
  selector: 'app-provider-login',
  templateUrl: './provider-login.component.html',
  styleUrls: ['./provider-login.component.css']
})
export class ProviderLoginComponent implements OnInit {
  loginform: FormGroup;
  emailPattern = "^[a-z0-9]+@gmail.com";
  display: boolean = false;
  constructor(private toastr: ToastrService, private router: Router,private providerService:ProviderServiceService) {
    this.loginform = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
      password: new FormControl('', [Validators.required])
    })
   }

  ngOnInit(): void {
  }
  login(){
    if (this.loginform.valid) {
      this.providerService.providerLoginApi(this.loginform.value).subscribe(res => {
        this.toastr.success("login success")
        console.log(res);
        // localStorage.setItem("response",JSON.stringify(res.data))
        localStorage.setItem("providerId",res.data.serviceprovider.providerId)
        localStorage.setItem("email",res.data.serviceprovider.email)
        localStorage.setItem("firstName",res.data.serviceprovider.firstName)
        this.router.navigateByUrl("/home")
        
      }, err => {
        this.toastr.error("Invalid Credentials....", "401")
      })
    }
  }
}
