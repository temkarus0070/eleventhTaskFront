import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ChatComponent } from './components/chat/chat.component';
import { MessageComponent } from './components/message/message.component';
import {RouterModule, Routes} from "@angular/router";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {FormsModule} from "@angular/forms";
import {AuthInterceptorInterceptor} from "./components/AUTH/auth-interceptor.interceptor";
import { CreateChatComponent } from './components/create-chat/create-chat.component';


export const BACKEND="http://localhost:8080";
export const ROUTES:Routes=[{path:"chat",component:ChatComponent},{path:"login",component:LoginComponent},{path:"register",component:RegisterComponent},{
  path:"chat/create",component:CreateChatComponent
}
  ,{path:"",component:HomeComponent}]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChatComponent,
    MessageComponent,
    LoginComponent,
    RegisterComponent,
    CreateChatComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpClient,
    {
      provide: HTTP_INTERCEPTORS,
      useClass:AuthInterceptorInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
