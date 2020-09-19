import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    private urlCreateService : CreateShortUrlService
    ) { }

  ngOnInit() {
    this.createForm();
  }

  onSubmit(){
  console.log;
  
  this.urlCreateService.createShortUrl(this.createShortUrlForm.value)
  .subscribe(
    data => {
      this.createShortUrlForm.reset();
      console.log(data);},
    error=> {console.error(error);}
    );
  }
  createForm(){
    this.createShortUrlForm = this.fb.group({
      longUrl:['',[ Validators.required]]
    });
  }

}
