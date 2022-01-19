import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Animal } from '../../model/animals';

@Injectable({
  providedIn: 'root',
})
export class AnimalsService {
  private _animals = new Subject<Animal>();

  private baseUrl = `${environment.baseUrl}/animals`;

  constructor(private http: HttpClient) {}
}
