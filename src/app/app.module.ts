// Angular Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Components
import { App } from './app';
import { Header } from './header/header';
import { User } from './user/user';

// Custom Modules
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  declarations: [App, Header, User],
  bootstrap: [App],
  imports: [BrowserModule, FormsModule, CommonModule, SharedModule, TasksModule],
})
export class AppModule {}
