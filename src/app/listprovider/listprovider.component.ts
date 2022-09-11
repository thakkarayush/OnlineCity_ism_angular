import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from '../service.service';
@Component({
  selector: 'app-listprovider',
  templateUrl: './listprovider.component.html',
  styleUrls: ['./listprovider.component.css']
})
export class ListproviderComponent implements OnInit {
  sp: Array<any> = []
  user: any = {}
  providerId: number = 0;
  display = false
  constructor(private toastr: ToastrService, private router: Router, private sessionService: SessionService) { }

  ngOnInit(): void {
    this.getallSp()
  }
  getallSp(){
    
    this.sessionService.getallSp().subscribe(res=>{
      console.log("get all users==>");
      console.log(res.users);
      this.sp = res;
    })
  }
  deleteProvider(providerId: any) {
    console.log("delete user called..." + providerId);
    this.sessionService.deleteProvider(providerId).subscribe(res=>{
      this.toastr.success("provider Deleted...")
      this.sp = this.sp.filter(sp => sp.providerId != providerId)
      this.router.navigateByUrl("/home")
    }, err => {
      console.log(err);
      this.toastr.error(err);
    })
  }
}