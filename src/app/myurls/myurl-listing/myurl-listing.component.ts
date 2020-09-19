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
  resultsLength = 0;
  dataSource : Url[];

  ngOnInit() {
   this.populateUrlTable();
 }

 private populateUrlTable(){
  this.myurlService.getUrls()
  .subscribe(
    data => {
      this.dataSource = data.docs;
      this.resultsLength = data.total;
      console.log(data)
    }, 
    error => {console.error(error)}
    );
 }

}
