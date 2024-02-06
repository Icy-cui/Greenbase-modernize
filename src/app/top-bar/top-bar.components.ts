import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatBadgeModule } from '@angular/material/badge';

/**
 * @title Top-bar overview
 */
@Component({
  selector: 'top-bar',
  templateUrl: 'top-bar.components.html',
  styleUrls: ['top-bar.components.scss'],
  standalone: true,
  imports: [MatToolbarModule, MatInputModule, MatIconModule, MatBadgeModule],
})
export class topBar {}
