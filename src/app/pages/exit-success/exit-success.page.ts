import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-exit-success',
  templateUrl: './exit-success.page.html',
  styleUrls: ['./exit-success.page.scss'],
})
export class ExitSuccessPage implements OnInit {
  TIME_THRESHOLD = 2 * 3600; // Display a message requesting payment if parking time is greater than this
  licensePlate: string;
  mustPay = false;
  timeDiff: number;
  timeDiffConverted: any;
  constructor( private database: DatabaseService ) { }

  ngOnInit() {
    this.timeDiff = this.database.lastTimeDiff;
    this.licensePlate = this.database.lastLicensePlate;
    if (this.timeDiff > this.TIME_THRESHOLD) {
      this.mustPay = true;
    }
    this.timeDiffConverted = this.secondsToDhms(this.timeDiff);
  }

  // Convert seconds to object of {days, hours, minutes, seconds}
  secondsToDhms(seconds: number) {
    const d = Math.floor(seconds / (3600 * 24));
    const h = Math.floor(seconds % (3600 * 24) / 3600);
    const m = Math.floor(seconds % 3600 / 60);
    const s = Math.floor(seconds % 60);
    return {day: d, hour: h, minute: m, second: s};
  }

}
