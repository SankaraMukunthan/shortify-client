import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { JwtService } from '../../../core/services/jwt.service';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output() toggleSidenav = new EventEmitter<void>();

  constructor(private jwtService:JwtService,private snackbar:MatSnackBar, public router:Router) { }

  ngOnInit() {
  }

  logoutHandler(){
    this.jwtService.destroyToken();
    this.router.navigate(['/login']);
    this.snackbar.open('Logged out','success',{duration:3000})
  }

}
