import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Observable, of, take, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app-shell';
  appShellHeaderHeight = 64;

  // can also consider mocking this from an async service
  staticFilesEndpoints = {
    'itero-aohs': of('http://localhost:3400'),
    'test-mife': of('http://localhost:5200'),
  };
}
