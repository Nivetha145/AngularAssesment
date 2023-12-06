import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GetfromadminService } from '../getfromadmin.service';
import {Collection} from  '../collectionStorage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchform!: FormGroup;
  click="";
  x="";
  y="";
  arr:any;
  arr2!:string;
  arr1:any;
  item:any;
 search:boolean=false;
  food=Collection[0].fooditems;

 



  test:GetfromadminService=inject(GetfromadminService);
  constructor(private fb:FormBuilder){
    this.searchform=this.fb.group({
      choose:['',Validators.required]
    })
  }
  ngOnInit(): void {
    
  }
  oninputevent(event:Event){
    this.y=((<HTMLInputElement>event.target).value)
    if(this.y=="Biscuits"){
      this.item=Collection[0].Biscuits;
    }
    else{
      if(this.y=="Fruits"){
        this.item=Collection[0].Fruits;
      }
      else{
        if(this.y=="Flours"){
          this.item=Collection[0].Flours;
        }
        else{
          this.item=Collection[0].Vegetables;
        }
      }
    }
  }
  oninputsevent(event:Event){
    
    this.x=(<HTMLInputElement>event.target).value;
  }
  send(event:any,event1:any,event2:any){
  
     this.arr=[{x:event1,y:event,z:event2}]
    
    this.test.set(this.arr)
 
  }
  sendd(){
    
    this.search=true;
  }

}