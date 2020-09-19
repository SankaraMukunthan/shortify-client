import { Component, OnInit } from '@angular/core';
import { Url } from '../models/url';
import { MyurlsService } from '../services/myurls.service';

@Component({
  selector: 'app-myurl-listing',
  templateUrl: './myurl-listing.component.html',
  styleUrls: ['./myurl-listing.component.scss']
})
export class MyurlListingComponent implements OnInit {

  constructor(private myurlService: MyurlsService) { }
  displayedColumns = ['longUrl', 'shortUrl', 'date',];
  dataSource : Url[] = [];

  ngOnInit() {
    this.myurlService.getUrls()
    .subscribe(
      data => {
        this.dataSource = data;
        console.log(data)
      }, 
      error => {console.error(error)}
      );
    
  }

}
