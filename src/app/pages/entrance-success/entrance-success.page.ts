import { Component, OnInit } from '@angular/core';
import { QrcodeService } from 'src/app/services/qrcode.service';

@Component({
  selector: 'app-entrance-success',
  templateUrl: './entrance-success.page.html',
  styleUrls: ['./entrance-success.page.scss'],
})
export class EntranceSuccessPage implements OnInit {
  qrcodeUrl: string;
  constructor(private qrcodeService: QrcodeService) { }

  ngOnInit() {
    this.qrcodeUrl = this.qrcodeService.url;
  }

}
