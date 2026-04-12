import { NgModule } from '@angular/core';
import { App } from './app';
import { BrowserModule } from '@angular/platform-browser';
import { Header } from './header/header';
import { Tasks } from './tasks/tasks';
import { User } from './user/user';

@NgModule({
  declarations: [App],
  bootstrap: [App],
  imports: [BrowserModule, Header, User, Tasks],
})
export class AppModule {}
