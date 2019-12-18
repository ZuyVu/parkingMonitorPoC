import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Platform } from '@ionic/angular';
import { QrcodeService } from 'src/app/services/qrcode.service';
import { DatabaseService } from 'src/app/services/database.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-exit',
  templateUrl: './exit.page.html',
  styleUrls: ['./exit.page.scss'],
})
export class ExitPage implements OnInit {
  @ViewChild('filePicker', { static: false }) filePickerRef: ElementRef<HTMLInputElement>;
  @Output() imagePick = new EventEmitter<string>();
  licensePlate: string;

  constructor(private router:Router, private database: DatabaseService, private qrcodeService: QrcodeService) { }

  ngOnInit() {
  }

  onPickImage() {
    this.filePickerRef.nativeElement.click();
  }

  onFileChosen(event: Event) {
    const time = new Date("December 18, 2019 00:00:00");
    // console.log('generated time is', time);
    this.database.record.set('hellotome', time);
    // console.log(this.database.record);
    const pickedFile = (event.target as HTMLInputElement).files[0];
    this.qrcodeService.readQRCode(pickedFile)
      .subscribe(res => {
        const licensePlate = res[0].symbol[0].data;
        // console.log('License plate is', licensePlate);
        const timeDiff = this.database.getLicensePlate(licensePlate);
        console.log(timeDiff);
        this.router.navigateByUrl('/exit-success');
      });
  }
}
