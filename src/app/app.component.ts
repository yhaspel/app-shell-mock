import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'app-shell';
  appShellHeaderHeight = 64;
  
  staticFilesEndpoint$!: Observable<string>;
  
  ngOnInit(): void {
    // mocking the static files endpoint coming from async service
    this.staticFilesEndpoint$ = of('http://localhost:3400');
  }
}
