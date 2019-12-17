import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  map = new Map<string, Date>();
  constructor() {}

  addLicensePlate(licensePlate: string) {
    if (this.map.has(licensePlate)) {
      // return error
    } else {
      this.map.set(licensePlate, new Date());
      console.log(new Date());
      console.log(this.map);
    }
  }

  getLicensePlate(licensePlate: string) {
    const entryTime = this.map.get(licensePlate);
    this.map.delete(licensePlate);
    const timeDiff = this.time_difference(entryTime, new Date());
    return timeDiff;
  }


  time_difference(time1: Date, time2: Date) {
    let diff = (time2.getTime() - time1.getTime()) / 1000;
    diff /= 60;
    return Math.abs(Math.round(diff));
  }
}
