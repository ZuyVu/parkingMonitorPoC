import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-exit-success',
  templateUrl: './exit-success.page.html',
  styleUrls: ['./exit-success.page.scss'],
})
export class ExitSuccessPage implements OnInit {
  TIME_THRESHOLD = 2 * 3600;
  licensePlate = 'Default License Plate';
  mustPay = false;
  timeDiff: number;
  timeDiffConverted: any;
  constructor( private database: DatabaseService ) { }

  ngOnInit() {
    console.log('license PLate is', this.licensePlate);
    this.timeDiff = this.database.lastTimeDiff;
    this.licensePlate = this.database.lastLicensePlate;
    if (this.timeDiff > this.TIME_THRESHOLD) {
      this.mustPay = true;
    }
    this.timeDiffConverted = this.secondsToDhms(this.timeDiff);
  }

  secondsToDhms(seconds: number) {
    const d = Math.floor(seconds / (3600 * 24));
    const h = Math.floor(seconds % (3600 * 24) / 3600);
    const m = Math.floor(seconds % 3600 / 60);
    const s = Math.floor(seconds % 60);
    return {day: d, hour: h, minute: m, second: s};
  }

}
