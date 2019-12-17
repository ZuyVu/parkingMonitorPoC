import { Component, OnInit } from '@angular/core';
import { QrcodeService } from 'src/app/services/qrcode.service';
import { LoadingController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-entrance',
  templateUrl: './entrance.page.html',
  styleUrls: ['./entrance.page.scss']
})
export class EntrancePage implements OnInit {
  isLoading = false;
  constructor(
    private qrcodeService: QrcodeService,
    private loadingCtrl: LoadingController,
    private router: Router,
    private databaseService: DatabaseService
  ) {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    let qrcode: string;
    this.loadingCtrl
      .create({ keyboardClose: true, message: 'Generating QR code...' })
      .then(loadingEl => {
        loadingEl.present();
        const licensePlate = form.value.licensePlate;
        qrcode = this.qrcodeService.getUrl(licensePlate);
        this.databaseService.addLicensePlate(licensePlate);
        setTimeout(() => {
          loadingEl.dismiss();
          this.router.navigateByUrl('/entrance-success');
        }, 1500);
      });
  }
}
