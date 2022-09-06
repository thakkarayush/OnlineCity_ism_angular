import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from '../service.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  email=""
  constructor(private sessionService: SessionService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }

  // forgortPassword(email:any){
  //   this.sessionService.forgotPassword(email).subscribe(resp=>{
  //     localStorage.setItem("email",resp.data.email)
  //     console.log(email);
      
  //     this.toastr.success("Otp sent");
  //     this.router.navigateByUrl("/enterotp")
  //   }, err =>{
  //     this.toastr.error("invalid details..")
  //   })
  // }

}
