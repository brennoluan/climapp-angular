import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'tempUnit',
    pure: true
})
export class TempUnitPipe implements PipeTransform {
    transform(value: number, unit: "C" | "F" = "C"): string {
        if (unit === "F") {
            const fahrenheit = (value * 9) / 5 + 32;
            return `${Math.round(fahrenheit)} F`;
        }
        return `${Math.round(value)} C`;
    }
}