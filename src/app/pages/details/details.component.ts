import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';
import { cities } from '../../data/cities';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsComponent {
  private route = inject(ActivatedRoute);
  private cityId = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('id') ?? cities[0].id)),
    { initialValue: cities[0].id }
  );

  readonly city = computed(
    () => cities.find((item) => item.id === this.cityId()) ?? cities[0]
  );
}
