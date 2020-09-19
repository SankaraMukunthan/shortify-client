import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  passwordResetForm : FormGroup
  private token = '';
  isloading = false;
  constructor(
    private authService: AuthService,
    private snackbar: MatSnackBar,
    public router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
    
    ) { }

  ngOnInit() {
    this.init();
    this.token = this.route.snapshot.params['token']  ;
  }

  onSubmit(){
    let {pwd,confirmpwd}= this.passwordResetForm.value;
    if(pwd !== confirmpwd){
      this.snackbar.open('Password do not match','error',{duration:3000});
      return ;
    }
    this.isloading = true;
    this.authService.resetPassword({token:this.token,pwd}).subscribe(
      data => {this.snackbar.open('Updated Successfuly','success',{duration:3000});
        this.router.navigate(['/login']);
        this.isloading = false;
        },
      err => {this.snackbar.open('Failed. Not updated','failed',{duration:3000});
      this.isloading = false;
      }

    )
    
  }


  private init(){
   this.passwordResetForm =  this.fb.group({
      pwd:['', Validators.required],
      confirmpwd:['', Validators.required]
    })
  }

}
