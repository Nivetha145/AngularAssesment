import { Component, OnInit, inject } from '@angular/core';
import { GetfromadminService } from '../getfromadmin.service';
import {Collection} from  '../collectionStorage';

@Component({
  selector: 'app-admindata',
  templateUrl: './admindata.component.html',
  styleUrls: ['./admindata.component.css']
})
export class AdmindataComponent {
 

test:GetfromadminService= inject (GetfromadminService);
 biscuit:boolean=false; 
 fruit:boolean=false; 
 flour:boolean=false; 
 include:boolean=false;
 include1:boolean=false;
 include2:boolean=false;
 include3:boolean=false;
 row: any;
 Vegetable:boolean=false;
 a="";b="";c="";
 a1="";b1="";c1="";
 a2="";b2="";c2="";
 a3=""; b3="";c3="";
 x:string="";
 y:string="";
 z:string="";
fooditems=Collection[0].fooditems;
Biscuits=Collection[0].Biscuits;


call(){
this.biscuit=true;
}
Fruits=Collection[0].Fruits;

call1(){
  this.fruit=true;
}
Flours=Collection[0].Flours;

call2(){
  this.flour=true;
}
Vegetables=Collection[0].Vegetables;

call3(){
  this.Vegetable=true;
}

delete(x:number){
  var delBtn = confirm(" Do you want to delete ?");
  if ( delBtn == true ) {
    this.Biscuits.splice(x,1);
  }   
} 
delete1(x:number){
  var delBtn = confirm(" Do you want to delete ?");
  if ( delBtn == true ) {
    this.Fruits.splice(x,1);
  }   
} 
delete2(x:number){
  var delBtn = confirm(" Do you want to delete ?");
  if ( delBtn == true ) {
    this.Flours.splice(x,1);
  }   
} 
delete3(x:number){
  var delBtn = confirm(" Do you want to delete ?");
  if ( delBtn == true ) {
    this.Vegetables.splice(x,1);
  }   
} 

Add(){
  this.include=true;
}
Add1(){
  this.include1=true;
}
Add2(){
  this.include2=true;
}
Add3(){
  this.include3=true;
}


submit(){

let index=3;
let arr=[{name:this.a,price:this.b,quantity:this.c}]
this.Biscuits.splice(index, 3, ...arr);

}

submit1(){
 
  let index=3;
  let arr=[{name:this.a1,price:this.b1,quantity:this.c1}]
  this.Fruits.splice(index, 3, ...arr);
  }
  
submit2(){
 
  let index=3;
  let arr=[{name:this.a2,price:this.b2,quantity:this.c2}]
  this.Flours.splice(index, 3, ...arr);
  }
  
submit3(){
  
  let index=3;
  let arr=[{name:this.a3,price:this.b3,quantity:this.c3}]
  this.Vegetables.splice(index, 3, ...arr);
  }
  
}
