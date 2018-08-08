import { Injectable } from '@angular/core';
import * as Decimal from 'decimal';
@Injectable()
export class ComissionsService {

  constructor() { }

  calculateComissions(transsaction) {
    switch (true) {
      case (transsaction.transferred <= 1000):
        transsaction.comission = Decimal(transsaction.transferred).mul(0.03).toNumber();
        transsaction.rate = 8;
        break;
      case (transsaction.transferred > 1000 && transsaction.transferred <= 5000):
        transsaction.comission = Decimal(transsaction.transferred).mul(0.025).toNumber();
        transsaction.rate = 6;
        break;
      case (transsaction.transferred > 5000 && transsaction.transferred <= 10000):
        transsaction.comission = Decimal(transsaction.transferred).mul(0.02).toNumber();
        transsaction.rate = 4;
        break;
      case (transsaction.transferred > 10000):
        transsaction.comission = Decimal(transsaction.transferred).mul(0.01).toNumber();
        transsaction.rate = 3;
        break;
    }
    transsaction.total = Decimal(transsaction.transferred).add(transsaction.rate).add(transsaction.comission).toNumber();
  }
}
