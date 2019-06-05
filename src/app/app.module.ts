import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import {AccordionModule, MenuModule, MessageService} from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RegisterService} from './landing-page/services/register/register.service';
import {LoginService} from './landing-page/services/login/login.service';
import {SliderModule} from 'primeng/slider';
import { SettingsComponent } from './settings/settings.component';
import { UpdatePasswordService } from './settings/services/update-password/update-password.service';
import { UpdateEmailService } from './settings/services/update-email/update-email.service';
import { UpdateNameService } from './settings/services/update-name/update-name.service';
import { UpdateNotificationsService } from './settings/services/update-notifications/update-notifications.service';
import { EnterViewSettingsService } from './settings/services/enter-view-settings.service';
import { EnterViewSettingsResolve } from './settings/services/enter-view-settings.resolve';
import {UploadPhotoService} from './home/services/upload-photo/upload-photo.service';
import {GetUserPhotosService} from './home/services/get-user-photos/get-user-photos.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LandingPageComponent,
    HomeComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AccordionModule,
    ToastModule,
    SliderModule,
    MenuModule,
  ],
  providers: [
    MessageService,
    RegisterService,
    LoginService,
    UpdatePasswordService,
    UpdateEmailService,
    UpdateNameService,
    UpdateNotificationsService,
    EnterViewSettingsService,
    EnterViewSettingsResolve,
    UploadPhotoService,
    GetUserPhotosService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
