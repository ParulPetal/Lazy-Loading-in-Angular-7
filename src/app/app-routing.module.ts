import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CompanyComponent } from './company/company.component';
import { PersonComponent } from './person/person.component';
import { ContactComponent } from './contact/contact.component';
import { AddressComponent } from './address/address.component';
import { PhoneNoComponent } from './phone-no/phone-no.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {path: "" ,component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"company", component:CompanyComponent},
  {path:"person",component:PersonComponent},
  {path:"contact",component:ContactComponent,
  children:[
  
    {path:"address",component:AddressComponent},
    
    {path:"phone",component:PhoneNoComponent},
]},

{path:"LazyModule",loadChildren: './lazy/lazy.module#LazyModule'} ,


{path:"**",component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [
    CompanyComponent,
    PersonComponent,
    ContactComponent,
    NotFoundComponent,
    HomeComponent,
    AddressComponent,
    PhoneNoComponent
    
  ]
})
export class AppRoutingModule { }
