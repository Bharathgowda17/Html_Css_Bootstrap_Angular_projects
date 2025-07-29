import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  
import { HttpClientModule } from '@angular/common/http';  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClubComponent } from './components/club/club.component';
import { MemberComponent } from './components/member/member.component';
import { MatchScheduleComponent } from './components/match-schedule/match-schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    ClubComponent,
    MemberComponent,
    MatchScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
