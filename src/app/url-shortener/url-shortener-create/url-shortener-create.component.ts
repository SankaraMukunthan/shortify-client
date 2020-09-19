import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { CreateShortUrlService } from '../services/create-short-url.service';

@Component({
  selector: 'app-url-shortener-create',
  templateUrl: './url-shortener-create.component.html',
  styleUrls: ['./url-shortener-create.component.scss']
})
export class UrlShortenerCreateComponent implements OnInit {
  createShortUrlForm : FormGroup;
  constructor(
    private fb:FormBuilder,
    private urlCreateService : CreateShortUrlService,
    public snackbar: MatSnackBar,
    private router: Router
    ) { }

  ngOnInit() {
    this.createForm();
  }

  onSubmit(){
  console.log;
  
  this.urlCreateService.createShortUrl(this.createShortUrlForm.value)
  .subscribe(
    data => {
      this.snackbar.open('Shorten url is available','success',{
        duration:3000
      });
      this.createShortUrlForm.reset();
      this.router.navigate(['shortify','myurls']);
      console.log(data);},
    error=> this.errorHandler(error,'Failed to create short url')
    );
  }
  createForm(){
    this.createShortUrlForm = this.fb.group({
      longUrl:['',[ Validators.required]]
    });
  }

  private errorHandler(err, msg){
    console.log(err);
    this.snackbar.open(msg,'Error',{duration:3000});
  }

}

