import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
    localStorage.clear();
    this.router.navigateByUrl("")
    this.toastr.success("You are logged out..")
  }

}
