import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QrcodeService {
  private endpoint = 'https://api.qrserver.com/v1/create-qr-code/?';
  private size = 200;
  constructor() {}

  getUrl(licensePlate: string): string {
    return (
      this.endpoint +
      'data=' +
      licensePlate.replace(/\s/g, '') +
      '&size=' +
      this.size +
      'x' +
      this.size
    );
  }
}
