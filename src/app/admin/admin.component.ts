import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from "@angular/router";
import { Collection } from '../collectionStorage';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  login: FormGroup;
  changepassword:FormGroup;
  nos:boolean=false;
  wrong:boolean=false;
  router:any;
  message:string="Your username or password is something wrong";
  password:string="okay!! Then go to admin data page by clicking Login"
  modifi:boolean=false;
  messagee:string='';
  go:boolean=false;
  come:boolean=true;
  constructor(private fb:FormBuilder, private route: Router){
    this.login=this.fb.group({
      usernames:['',Validators.required],
      passwords:['',Validators.required]
    })
    this.changepassword=this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required],
      passwords:['',Validators.required]
    })
   }
   hellooo(){
  this.go=true;

   }
  passworduh:string="Nivetha#92"

  call(){
  this.nos=true;
  }
  authentication(){

    if( (this.login.get('usernames')?.value=="Nivetha")&&(this.login.get('passwords')?.value==this.passworduh)){
   
      this.route.navigate(['/admindata']);
    }
    else{
      this.wrong=true;
    }
  }
 


 
modify(){
  if((this.changepassword.get('username')?.value)=="Nivetha"){
    if((this.changepassword.get('password')?.value)==(this.changepassword.get('passwords')?.value)){
      this.passworduh=(this.changepassword.get('password')?.value);
      alert("successfully Changed")
    }
  }
}
}


