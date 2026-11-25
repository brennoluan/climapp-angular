import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';
import { cities } from '../../data/cities';
import { FormsModule } from '@angular/forms';
import { DatePipe, LowerCasePipe } from '@angular/common';
import { TempUnitPipe } from '../../pipes/temp-unit.pipe';
import { TruncatePipe } from '../../pipes/truncate.pipe';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterLink, FormsModule, DatePipe, TempUnitPipe, TruncatePipe, LowerCasePipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsComponent {
  today = new Date();

  email = "";
  forecastDays = 0;
  rainAlerts = true;
  temperatureUnit = "C";
  alertPeriod = "Manhã";
  alertStart = "2026-02-03";
  alertTime = "08:00";
  alertSensitivity = 60;

  private route = inject(ActivatedRoute);
  private cityId = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('id') ?? cities[0].id)),
    { initialValue: cities[0].id }
  );

  readonly city = computed(
    () => cities.find((item) => item.id === this.cityId()) ?? cities[0]
  );

  subscribe(): void {
    alert(`Cadastro realizado ${this.email}!`);
  }

  savePreferences(): void {
    const alertSchedule = `${this.alertStart} ${this.alertTime}`;

    alert(
      `Preferências salvas para ${this.city().name}: ${this.forecastDays} dias, ` +
      `${this.temperatureUnit}, ${this.alertPeriod.toLowerCase()}, ` +
      `chuva ${this.rainAlerts ? "ativada" : "desativada"} e sensibilidade ${this.alertSensitivity}%. ` +
      `(${alertSchedule})`
    );
  }

}
