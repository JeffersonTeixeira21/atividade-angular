import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { People } from '../../model/people';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  private _person = new Subject<People>();

  private baseUrl = `${environment.baseUrl}/people`;

  constructor(private http: HttpClient) {}

  all(query?: string) {
    const params = query ? { params: { q: query } } : {};
    return this.http.get<People[]>(this.baseUrl, params);
  }

  getOne(id: number) {
    return this.http.get<People>(`${this.baseUrl}/${id}`);
  }

  delete(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  upsert(people: People) {
    people.age = Number(people.age);

    if (people.id) {
      return this.http.patch(`${this.baseUrl}/${people.id}`, people);
    } else {
      return this.http.post<People>(this.baseUrl, people);
    }
  }

  getPeople(): Observable<People> {
    return this._person.asObservable();
  }

  setPeople(people: People) {
    this._person.next(people);
  }
}
