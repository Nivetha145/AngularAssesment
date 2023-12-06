import { Component, OnInit, inject } from '@angular/core';
import { GetfromadminService } from '../getfromadmin.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit{
  output:any;
  test:GetfromadminService=inject(GetfromadminService);
  ngOnInit(): void {
this.output=this.test.get2();
console.log(this.output);
  }

}
