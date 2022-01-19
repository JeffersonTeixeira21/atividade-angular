import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { People } from '../../model/people';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  private _person = new Subject<People>();

  private baseUrl = `${environment.baseUrl}/people`;

  all(query?: string) {
    const params = query ? { params: { q: query } } : {};
    return this.http.get<People[]>(this.baseUrl, params);
  }

  constructor(private http: HttpClient) {}
}
