import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';

/**
 * @title sidenav
 * this component is side menu that provide a navigation for user to go to different sections.
 */
@Component({
  selector: 'side-bar',
  templateUrl: 'side-bar.components.html',
  styleUrls: ['side-bar.components.scss'],
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule, MatIconModule],
})
export class Sidebar {
  showFiller = false;
}
