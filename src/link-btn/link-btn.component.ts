import { Component, input } from '@angular/core';

@Component({
  selector: 'app-link-btn',
  standalone: true,
  imports: [],
  templateUrl: './link-btn.component.html',
  styleUrl: './link-btn.component.scss',
})
export class LinkBtnComponent {
  tag = input.required<string>();
  link = input.required<string>();
}
