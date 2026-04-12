import { NgModule } from '@angular/core';
import { App } from './app';
import { BrowserModule } from '@angular/platform-browser';
import { Header } from './header/header';
import { Tasks } from './tasks/tasks';
import { User } from './user/user';
import { Card } from './shared/card/card';
import { Task } from './tasks/task/task';
import { NewTask } from './tasks/new-task/new-task';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [App, Header, User, Card, Tasks, Task, NewTask],
  bootstrap: [App],
  imports: [BrowserModule, FormsModule, CommonModule],
})
export class AppModule {}
