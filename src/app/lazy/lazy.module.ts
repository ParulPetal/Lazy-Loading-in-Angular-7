import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Lazycomponent1Component } from './lazycomponent1/lazycomponent1.component';
import { Lazycomponent2Component } from './lazycomponent2/lazycomponent2.component';

const routes: Routes = [
{path:"",children:[
  
  { path: '', component: Lazycomponent1Component},
  {path:"lazyc1",component:Lazycomponent1Component},
  {path:"lazyc2",component:Lazycomponent2Component},
]}
];

@NgModule({
  declarations: [Lazycomponent1Component, Lazycomponent2Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  
})
export class LazyModule { 
constructor(){
  console.log("Lazy loading");
}}