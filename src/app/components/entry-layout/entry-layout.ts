import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-entry-layout',
  imports: [RouterLink, CommonModule],
  templateUrl: './entry-layout.html',
  styleUrl: './entry-layout.css',
})
export class EntryLayout {
  template = input<'intro' | 'notFound'>('intro')
}
