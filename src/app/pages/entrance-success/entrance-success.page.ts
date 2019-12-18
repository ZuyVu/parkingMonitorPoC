import { Component, OnInit } from '@angular/core';
import { QrcodeService } from 'src/app/services/qrcode.service';
import { LoadingController } from '@ionic/angular';
import { DatabaseService } from 'src/app/services/database.service';
import { Router } from '@angular/router';

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
    private loadingCtrl: LoadingController,
    private router: Router
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
    setTimeout(() => {
      this.router.navigateByUrl('/home');
    }, 30000);
  }

}
