import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  passwordResetEmailForm : FormGroup
  constructor(private fb:FormBuilder,private snackbar:MatSnackBar,public router:Router, private authService:AuthService) { }
  isloading= false;
  ngOnInit() {
    this.initForm();
  }

  private initForm(){
    this.passwordResetEmailForm=this.fb.group({
      emailId:['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(){
    this.isloading = true;
    this.authService.forgotPassword(this.passwordResetEmailForm.value).subscribe(
      data => {
        this.snackbar.open('Link has been to sent to your email','success',{duration:3000})
        this.isloading =false;
        this.router.navigate(['/login'])
        console.log(data)
      },
      error => {
        this.snackbar.open('Email not sent','error',{duration:3000})
        this.isloading =false;
        console.log(error)
      }
    )
  }

}
