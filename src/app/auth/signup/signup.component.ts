import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  authSignUpForm : FormGroup
  constructor(private authService:AuthService, private fb:FormBuilder, private snackbar: MatSnackBar, public router: Router) { }
  isLoading = false;
  ngOnInit() {
    this.initForm();
  }

  navToLogin(){
    this.router.navigate(['/login']);
  }
  
  onSignUpSubmit(){
    this.isLoading = true;
    console.log(this.authSignUpForm.value );
    this.authService.signup(this.authSignUpForm.value).subscribe(
       data =>{
         this.isLoading = false;
        this.snackbar.open('Signup successfull','success',{duration:3000})
        this.router.navigate(['/login']);
       },
          error=>this.errorHandler(error,'Login Failed')
    )
    
  }

  private initForm(){
    this.authSignUpForm = this.fb.group({
      firstName:['', Validators.required],
      lastName:['', Validators.required],
      emailId: ['',[Validators.required, Validators.email]],
      pwd: ['',[Validators.required]]
    })
  }
  private errorHandler(err, msg){
    this.isLoading = false;
    console.log(err);
    this.snackbar.open(msg,'Error',{duration:3000});
  }

}
