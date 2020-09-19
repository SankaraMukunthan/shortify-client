import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { JwtService } from '../core/services/jwt.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authLoginForm : FormGroup

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService, 
    private jwtService:JwtService, 
    public snackbar: MatSnackBar,
    private router: Router
    ) { }

  ngOnInit() {
    this.initForm();
  }
  onSubmit(){
    console.log(this.authLoginForm.value );
    this.authService.login(this.authLoginForm.value).subscribe(
       data =>{
         this.jwtService.setToken(data.token);
        this.snackbar.open('Login successfull','success',{duration:3000})
        this.router.navigate(['/shortify','shortener']);
       },
          error=>this.errorHandler(error,'Login Failed')
    )
    
  }
  pwdForgotHandler(){
    this.router.navigate(["/forgotpassword"])
  }

  private initForm(){
    this.authLoginForm = this.fb.group({
      emailId: ['',[Validators.required, Validators.email]],
      pwd: ['',[Validators.required]]
    })
  }
  private errorHandler(err, msg){
    console.log(err);
    this.snackbar.open(msg,'Error',{duration:3000});
  }

}
