import { Component, OnInit } from '@angular/core';
import { QrcodeService } from 'src/app/services/qrcode.service';
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
    private router: Router,
    private databaseService: DatabaseService
  ) {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const licensePlate = form.value.licensePlate.toUpperCase().replace(/\s/g, '');
    // licensePlate = encodeURIComponent(licensePlate);
    console.log('licensePlate in onSubmit is', licensePlate);
    if (this.databaseService.addLicensePlate(licensePlate)) {
      this.qrcodeService.createQRCodeUrl(licensePlate);
      this.router.navigateByUrl('/entrance-success');
    } else {
      this.router.navigateByUrl('/entrance-fail');
    }
  }
}
