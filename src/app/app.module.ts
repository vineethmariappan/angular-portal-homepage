import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NotificationComponent } from './notification/notification.component';
import { SmsListComponent } from './notification/sms-list/sms-list.component';
import { EmailListComponent } from './notification/email-list/email-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { CircularsComponent } from './circulars/circulars.component';
import { CollegeComponent } from './circulars/college/college.component';
import { DeptListComponent } from './circulars/dept-list/dept-list.component';
import { EventsLisstComponent } from './circulars/events-lisst/events-lisst.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { QuickAccessComponent } from './quick-access/quick-access.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotificationComponent,
    SmsListComponent,
    EmailListComponent,
    StudentDetailsComponent,
    CircularsComponent,
    CollegeComponent,
    DeptListComponent,
    EventsLisstComponent,
    QuickAccessComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
