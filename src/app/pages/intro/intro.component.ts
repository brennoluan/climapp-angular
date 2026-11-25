import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EntryLayout } from '../../components/entry-layout/entry-layout';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [EntryLayout],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntroComponent { }
