import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetfromadminService {
    static set(Collection: { fooditems: { value1: string; value2: string; value3: string; value4: string; }[]; Biscuits: { name: string; price: string; quantity: string; }[]; fruits: { name: string; price: string; quantity: string; }[]; flours: { name: string; price: string; quantity: string; }[]; Vegetables: { name: string; price: string; quantity: string; }[]; }[]) {
        throw new Error("Method not implemented.");
    }
 item: any;
 available:any;
  constructor() { }
  set(food:string){
    this.item=food;
  }
  get(){
    return this.item;
  }
  set1(arr1:any){
    this.available=arr1;
  }
  get1(){
    return this.available;
  }
  set2(arr1:any){
    this.available=arr1;
  }
  get2(){
    return this.available;
  }
}
