import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {TransactionsServiceService} from '../shared/transactions/transactions-service.service';
import {TransactionAddComponent} from './transaction-add/transaction-add.component';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  constructor(public matDialog: MatDialog,
              private transactionService: TransactionsServiceService) { }

  ngOnInit() {
  }

  transferModal() {
    let dialogRef = this.matDialog.open(TransactionAddComponent);
  }


}
