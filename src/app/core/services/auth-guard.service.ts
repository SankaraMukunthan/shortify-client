import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { CanActivate, Router } from '@angular/router';
import { JwtService } from './jwt.service';

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private jwtService:JwtService,private snackbar:MatSnackBar, public router:Router) { }
  canActivate(): boolean {
    if(this.jwtService.getToken()){
      return true;
    }else {
      this.router.navigate(['/login']);
      this.snackbar.open('You should login to access','error',{duration:3000});
      return false;
    }
  }

  canActivateChild(): boolean {
    return this.canActivate();
  }
}
