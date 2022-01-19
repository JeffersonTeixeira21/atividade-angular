import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Address } from '../../model/address';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  private _address = new Subject<Address>();

  private baseUrl = `${environment.baseUrl}/address`;

  constructor(private http: HttpClient) {}
}
