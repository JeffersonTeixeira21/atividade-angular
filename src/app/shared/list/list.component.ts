import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'shared-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input()
  headers: string[];

  @Output()
  deleteEntity = new EventEmitter();

  @Output()
  searchEntity = new EventEmitter();

  @Output()
  limitEntity = new EventEmitter();

  entities: any[];
  keys: string[];
  inputValue: string;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((value) => {
      this.entities = value.entities;
    });

    this.keys = Object.keys(this.entities[0]);
  }
  search(): void {
    const obj = {
      query: this.inputValue,
      callback: (value) => { this.setEntities(value) }
    };
    this.searchEntity.emit(obj);
  }

  goToAdd(): void {
    this.router.navigate(['add'], { relativeTo: this.activatedRoute });
  }

  editEntity(id: number): void {
    this.router.navigate([id], { relativeTo: this.activatedRoute });
  }

  onDeleteEntity(id: number): void {
    const obj = {
      id,
      callback: (entity) => {
        this.setEntities(entity);
      },
    };
    this.deleteEntity.emit(obj);
  }

  private setEntities(entities) {
    this.entities = entities;
  }
}
