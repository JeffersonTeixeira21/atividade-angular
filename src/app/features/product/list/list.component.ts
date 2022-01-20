import { Component, OnInit } from '@angular/core';
import { DeleteEvent } from 'src/app/core/model/deleteEvent';
import { SearchEvent } from 'src/app/core/model/searchEvent';
import { ProductService } from 'src/app/core/services/product/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  headers: string[] = ['Id', 'Name', 'Department', 'Price', 'Comment', 'Action'];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
  
  }

  deleteProduct(event: DeleteEvent): void {
    this.productService.delete(event.id).subscribe(() => {
      this.productService.all().subscribe(event.callback);
    });
  }

  searchProduct(event: SearchEvent): void {
    this.productService.all(event.query).subscribe(event.callback);
  }
}
