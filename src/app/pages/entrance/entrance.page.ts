import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { QrcodeService } from 'src/app/services/qrcode.service';

@Component({
  selector: 'app-entrance',
  templateUrl: './entrance.page.html',
  styleUrls: ['./entrance.page.scss'],
})
export class EntrancePage implements OnInit {

  constructor(private qrcodeService: QrcodeService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const licensePlate = form.value.licensePlate;
    console.log(licensePlate);

    const qrcode = this.qrcodeService.getUrl(licensePlate);

    console.log(qrcode);

  }

}
