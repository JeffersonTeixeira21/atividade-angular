import { Component, OnInit } from '@angular/core';
import { Endereco, NgxViacepService } from '@brunoc/ngx-viacep';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private viacep: NgxViacepService) { }

  ngOnInit(): void {
    this.viacep
    .buscarPorCep("88220000")
    .subscribe((endereco: Endereco) => {
    // Endereço retornado :)
    console.log(endereco);
  });
  }

}
