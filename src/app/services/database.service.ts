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
    licensePlate = licensePlate.toUpperCase();
    this.lastLicensePlate = licensePlate;
    if (this.record.has(licensePlate)) {
      return false; // Record already Exist
    } else {
      this.record.set(licensePlate, new Date());
      return true;
    }
  }

  getLicensePlate(licensePlate: string) {
    this.lastLicensePlate = licensePlate;
    const entryTime = this.record.get(licensePlate);
    if (!entryTime) {
    return null;
    }
    const timeDiff = this.time_difference(entryTime, new Date());
    this.lastTimeDiff = timeDiff;
    this.record.delete(licensePlate);
    return timeDiff;
  }


  time_difference(time1: Date, time2: Date) {
    const diff = (time2.getTime() - time1.getTime()) / 1000;
    return Math.abs(Math.round(diff));
  }
}
