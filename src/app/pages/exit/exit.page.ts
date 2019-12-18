import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { QrcodeService } from 'src/app/services/qrcode.service';
import { DatabaseService } from 'src/app/services/database.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-exit',
  templateUrl: './exit.page.html',
  styleUrls: ['./exit.page.scss'],
})
export class ExitPage implements OnInit {
  @ViewChild('filePicker', { static: false }) filePickerRef: ElementRef<HTMLInputElement>;
  @Output() imagePick = new EventEmitter<string>();
  licensePlate: string;

  constructor(
    private router: Router,
    private database: DatabaseService,
    private qrcodeService: QrcodeService,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
  }

  onPickImage() {
    this.filePickerRef.nativeElement.click();
  }

  onFileChosen(event: Event) {
    const time = new Date("December 18, 2019 00:00:00");
    // console.log('generated time is', time);
    this.database.record.set('HELLOTOME', time);
    // console.log(this.database.record);
    const pickedFile = (event.target as HTMLInputElement).files[0];
    this.loadingCtrl
      .create({ keyboardClose: true, message: 'Reading QR Code...' })
      .then(loadingEl => {
        loadingEl.present();
        this.qrcodeService.readQRCode(pickedFile)
          .subscribe(res => {
            const licensePlate = res[0].symbol[0].data;
            console.log('License plate is', licensePlate);
            const timeDiff = this.database.getLicensePlate(licensePlate);
            console.log('timeDiff in exit is', timeDiff);
            if (timeDiff) {
              this.router.navigateByUrl('/exit-success');
            } else {
              this.router.navigateByUrl('/exit-fail');
            }
          });
        loadingEl.dismiss();
      });
  }
}
