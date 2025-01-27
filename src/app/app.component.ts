import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { LinkBtnComponent } from '../link-btn/link-btn.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LinkBtnComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Social';
}
