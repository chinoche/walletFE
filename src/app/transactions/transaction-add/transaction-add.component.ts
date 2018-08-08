import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ComissionsService } from '../../shared/comissions/comissions.service';
import {MatDialogRef} from '@angular/material';
import {TransactionsServiceService} from '../../shared/transactions/transactions-service.service';

@Component({
  selector: 'app-transaction-add',
  templateUrl: './transaction-add.component.html',
  styleUrls: ['./transaction-add.component.css']
})
export class TransactionAddComponent implements OnInit {

  transaction: any = {};
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  constructor(
    private dialogRef: MatDialogRef<TransactionAddComponent>,
    private commisionsService: ComissionsService,
    private transactionService: TransactionsServiceService
    ) { }

  ngOnInit() {
  }

  onTransferChange(transaction) {
    if (transaction.transferred && transaction.transferred > 0) {
      this.commisionsService.calculateComissions(transaction);
    } else {
      this.transaction.comission = 0;
      this.transaction.rate = 0;
    }
  }

  transfer(transaction) {
    if (transaction.transferred && transaction.destination){
      transaction.transferred = parseFloat(transaction.transferred);
      this.transactionService.transfer(transaction).subscribe((response) => {
        console.log(response);
      })
    }
  }

  close() {
    this.dialogRef.close();
  }

}
