import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';

import {HomeComponent} from './routes/home/home.component';
import {PostListComponent} from './routes/post-list/post-list.component';
import {PostDetailComponent} from './routes/post-detail/post-detail.component';
import {UserListComponent} from './routes/user-list/user-list.component';
import {UserDetailComponent} from './routes/user-detail/user-detail.component';

import {HeaderComponent} from './layouts/header/header.component';

import {ButtonComponent} from './components/button/button.component';
import {PostItemComponent} from './components/post-item/post-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ButtonComponent,
    PostListComponent,
    PostDetailComponent,
    UserListComponent,
    UserDetailComponent,
    PostItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
