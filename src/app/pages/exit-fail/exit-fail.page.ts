import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-exit-fail',
  templateUrl: './exit-fail.page.html',
  styleUrls: ['./exit-fail.page.scss'],
})
export class ExitFailPage implements OnInit {
  licensePlate: string;
  constructor(private database: DatabaseService) { }

  ngOnInit() {
    this.licensePlate = this.database.lastLicensePlate;
  }

}
