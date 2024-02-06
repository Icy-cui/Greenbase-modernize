import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { orderList } from './order-list/order-list.component';
import { topBar } from './top-bar/top-bar.components';
import { Sidebar } from './side-bar/side-bar.components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, orderList, topBar, Sidebar, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'material-demo';
}
