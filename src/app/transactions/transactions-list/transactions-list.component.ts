import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.css']
})
export class TransactionsListComponent implements OnInit {

  @Output() selected = new EventEmitter();

  transactions = [
    {id: 123, amount: 23763},
    {id: 123, amount: 23763},
    {id: 123, amount: 23763},
    {id: 123, amount: 23763},
    {id: 123, amount: 23763},
  ]
  constructor() { }

  ngOnInit() {
  }

}
