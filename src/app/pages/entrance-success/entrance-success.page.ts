import { Component, OnInit } from '@angular/core';
import { QrcodeService } from 'src/app/services/qrcode.service';
import { LoadingController } from '@ionic/angular';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-entrance-success',
  templateUrl: './entrance-success.page.html',
  styleUrls: ['./entrance-success.page.scss'],
})
export class EntranceSuccessPage implements OnInit {
  qrcodeUrl: string;
  licensePlate: string;
  constructor(
    private qrcodeService: QrcodeService,
    private database: DatabaseService,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.licensePlate = this.database.lastLicensePlate;
    this.loadingCtrl
      .create({keyboardClose: true, message: 'Generating QR Code...'})
      .then(loadingEl => {
        loadingEl.present();
        this.qrcodeUrl = this.qrcodeService.lastUrl;
        setTimeout(() => {
          loadingEl.dismiss();
        }, 1000);
      });
  }

}
