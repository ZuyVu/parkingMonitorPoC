import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  record = new Map<string, Date>();
  lastTimeDiff: number;
  lastLicensePlate: string;
  constructor() {}

  addLicensePlate(licensePlate: string) {
    if (this.record.has(licensePlate)) {
      // return error
    } else {
      this.record.set(licensePlate, new Date());
      console.log(new Date());
      console.log(this.record);
    }
  }

  getLicensePlate(licensePlate: string) {
    console.log(this.record);
    this.lastLicensePlate = licensePlate;
    const entryTime = this.record.get(licensePlate);
    console.log('Entry time is', entryTime);
    console.log('Current time is', new Date());
    const timeDiff = this.time_difference(entryTime, new Date());
    this.lastTimeDiff = timeDiff;
    this.record.delete(licensePlate);
    return timeDiff;
  }


  time_difference(time1: Date, time2: Date) {
    let diff = (time2.getTime() - time1.getTime()) / 1000;
    return Math.abs(Math.round(diff));
  }
}
