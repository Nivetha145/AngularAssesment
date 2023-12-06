import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AdmindataComponent } from './admindata/admindata.component';

import { PaymentComponent } from './payment/payment.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

const routes: Routes = [ {path:'',component:HomeComponent},{path:'payment',component:PaymentComponent},{path:'admin',component:AdminComponent},{path:'confirm',component:ConfirmationComponent},{path:'admindata',component:AdmindataComponent},{path:'search',component:SearchComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
