import { Component, OnInit, inject } from '@angular/core';
import { GetfromadminService } from '../getfromadmin.service';
import {Collection} from  '../collectionStorage';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

names:any
sell:any;
  test: GetfromadminService=inject(GetfromadminService)
  prices!:string;
  ngOnInit(): void {
   this.names=this.test.get();

  }
  pass(price:any,name:any){
   this.sell=[{price,name}]
this.test.set1(this.sell);
  }
  




}