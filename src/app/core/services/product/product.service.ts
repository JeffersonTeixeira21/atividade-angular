import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../../model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _product = new Subject<Product>();

  private baseUrl = `${environment.baseUrl}/product`;

  constructor(private http: HttpClient) {}

  all(query?: string) {
    const params = query ? { params: { q: query } } : {};
    return this.http.get<Product[]>(this.baseUrl, params);
  }

  getOne(id: number) {
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }

  delete(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  upsert(product: Product) {
    product.department = String(product.department);

    if (product.id) {
      return this.http.patch<Product>(`${this.baseUrl}/${product.id}`, product);
    } else {
      return this.http.post<Product>(this.baseUrl, product);
    }
  }

  getProduct(): Observable<Product> {
    return this._product.asObservable();
  }

  setProduct(product: Product) {
    this._product.next(product);
  }
}
