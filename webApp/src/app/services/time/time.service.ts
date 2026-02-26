import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  // Estimate sunrise/sunset using a simplified solar position formula.
  public isDay(now: Date): boolean {
    // 1. Infer approximate latitude from timezone offset    
    const tzOffset = -now.getTimezoneOffset() / 60;
    const approxLatitude = tzOffset * 7;

    // 2. Compute day of year
    const start = new Date(now.getFullYear(), 0, 0);
    const dayOfYear = Math.floor((now.getTime() - start.getTime()) / 86400000);

    // 3. Solar declination
    const decl = 23.45 * Math.sin(((360 / 365) * (dayOfYear - 81)) * (Math.PI / 180));

    // 4. Calculate hour angle for sunrise/sunset
    const latRad = approxLatitude * (Math.PI / 180);
    const declRad = decl * (Math.PI / 180);

    const cosH = -Math.tan(latRad) * Math.tan(declRad);

    if (cosH > 1) return false;
    if (cosH < -1) return true;

    const H = Math.acos(cosH) * (180 / Math.PI);

    // 5. Convert hour angle to local sunrise/sunset times
    const sunrise = 12 - (H / 15);
    const sunset = 12 + (H / 15);

    const currentHour =
      now.getHours() + now.getMinutes() / 60 + now.getSeconds() / 3600;

    return currentHour >= sunrise && currentHour < sunset;
  }

}
