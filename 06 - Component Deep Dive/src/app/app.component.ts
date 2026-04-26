import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ServerStatusComponent } from './dashboard/server-status/server-status.component';
import { TrafficComponent } from './dashboard/traffic/traffic.component';
import { TicketsComponent } from './dashboard/tickets/tickets.component';
import {
  Image,
  DashboardItemComponent,
} from './dashboard/dashboard-item/dashboard-item.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    HeaderComponent,
    ServerStatusComponent,
    TrafficComponent,
    TicketsComponent,
    DashboardItemComponent,
  ],
})
export class AppComponent {
  serverTitle = 'Server Status';
  serverImage: Image = {
    src: 'status.png',
    alt: 'A signal symbol',
  };

  trafficTitle = 'Traffic';
  trafficImage: Image = {
    src: 'globe.png',
    alt: 'A globe',
  };

  ticketsTitle = 'Support Tickets';
  ticketsImage: Image = {
    src: 'list.png',
    alt: 'A list of items',
  };
}
