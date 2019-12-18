import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QrcodeService {
  private endpoint_create = 'https://api.qrserver.com/v1/create-qr-code/?';
  private endpoint_read = 'https://api.qrserver.com/v1/read-qr-code/?';
  private size = 200;
  lastUrl: string;
  constructor(private http: HttpClient) {}

  createQRCodeUrl(licensePlate: string): string {
    licensePlate = licensePlate.toUpperCase();
    const url = (
      this.endpoint_create +
      'data=' +
      licensePlate +
      '&size=' +
      this.size +
      'x' +
      this.size
    );
    this.lastUrl = url;
    return url;
  }

  readQRCode(file: File): Observable<any> {
    const fd = new FormData();
    fd.append('MAX_FILE_SIZE', ' 1048576');
    fd.append('file', file, file.name);
    return this.http.post(this.endpoint_read, fd);
  }
}
