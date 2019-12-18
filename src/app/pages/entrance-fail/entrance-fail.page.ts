import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-entrance-fail',
  templateUrl: './entrance-fail.page.html',
  styleUrls: ['./entrance-fail.page.scss'],
})
export class EntranceFailPage implements OnInit {
  licensePlate: string;
  constructor(private database: DatabaseService) { }

  ngOnInit() {
    this.licensePlate = this.database.lastLicensePlate;
  }

}
