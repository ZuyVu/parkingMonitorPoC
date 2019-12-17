import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QrcodeService {
  private endpoint = 'https://api.qrserver.com/v1/create-qr-code/?';
  private size = 200;
  url: string;
  constructor() {}

  getUrl(licensePlate: string): string {
    const url = (
      this.endpoint +
      'data=' +
      licensePlate.replace(/\s/g, '') +
      '&size=' +
      this.size +
      'x' +
      this.size
    );
    this.url = url;
    console.log(url);
    return url;
  }
}
