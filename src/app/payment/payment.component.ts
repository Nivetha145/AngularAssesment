import { Component, OnInit, inject } from '@angular/core';
import { GetfromadminService } from '../getfromadmin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit{
  pricee!:any;
  niviii!:number;
  y!:String;
  z!:string;
x!:number;
array:any;
payform!:FormGroup;
  test:GetfromadminService=inject(GetfromadminService);
  constructor(private fb:FormBuilder) {
    this.payform=this.fb.group({
      quantity:['',Validators.required],
      priceuh:['',Validators.required],
      amount:['',Validators.required]
    })
  }
  ngOnInit(): void {
    this.pricee=this.test.get1();
   
    console.log(this.pricee)

  }
  oninputevent(event:Event){
    this.y=(<HTMLInputElement>event.target).value;
    this.niviii=Number(this.y)*Number(this.pricee[0].price);
    console.log(Number(this.pricee[0].price))
  }
 
  pay(namess:any){
this.array=[{
  x:namess,y:this.niviii
}]
this.test.set2(this.array)
  }


}
