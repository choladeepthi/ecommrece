import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AloginComponent } from './alogin/alogin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FootComponent } from './foot/foot.component';
import { FootwearComponent } from './footwear/footwear.component';
import { LandComponent } from './land/land.component';
import { MenComponent } from './men/men.component';
import { MenwearComponent } from './menwear/menwear.component';
import { RegistrationComponent } from './registration/registration.component';
import { UloginComponent } from './ulogin/ulogin.component';
import { WomenComponent } from './women/women.component';
import { WomenwearComponent } from './womenwear/womenwear.component';


const routes: Routes = [
    {path:'land', component:LandComponent},
    {path:'alogin', component:AloginComponent},
    {path:'ulogin', component:UloginComponent},
    {path:'registration', component:RegistrationComponent},
    {path:'dashboard', component:DashboardComponent},
    {path:'womenwear', component:WomenwearComponent},
    {path:'women', component:WomenComponent},
    {path:'menwear', component:MenwearComponent},
    {path:'men', component:MenComponent},
    {path:'footwear', component:FootwearComponent},
    {path:'foot', component:FootComponent},




  ];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }