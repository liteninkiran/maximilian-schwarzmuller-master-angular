// Angular Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
  imports: [
    // Angular Modules
    BrowserModule,

    // Custom Modules
    SharedModule,
    TasksModule,
  ],
})
export class AppModule {}
