import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LandComponent } from './land/land.component';
import { AloginComponent } from './alogin/alogin.component';

import { UloginComponent } from './ulogin/ulogin.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WomenwearComponent } from './womenwear/womenwear.component';
import { WomenComponent } from './women/women.component';
import { MenwearComponent } from './menwear/menwear.component';
import { MenComponent } from './men/men.component';
import { FootwearComponent } from './footwear/footwear.component';
import { FootComponent } from './foot/foot.component';


@NgModule({
  declarations: [
    AppComponent,
    LandComponent,
    AloginComponent,
  
    UloginComponent,
       RegistrationComponent,
       DashboardComponent,
       WomenwearComponent,
       WomenComponent,
       MenwearComponent,
       MenComponent,
       FootwearComponent,
       FootComponent,
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
