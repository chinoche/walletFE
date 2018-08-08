import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppMaterialModule } from './app-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { NotificationService } from './shared/notification/notification.service';
import { AuthService } from './shared/auth/auth.service';
import { AppService } from './app.service';
import { RegisterComponent } from './register/register.component';
import { CompareDirective } from './shared/compare/compare.directive';
import { TransactionsComponent } from './transactions/transactions.component';
import { TransactionsListComponent } from './transactions/transactions-list/transactions-list.component';
import { ProfileComponent } from './profile/profile.component';
import { TransactionAddComponent } from './transactions/transaction-add/transaction-add.component';
import { TransactionsServiceService } from './shared/transactions/transactions-service.service';
import { ReqInterceptor } from './shared/interceptor/req-interceptor.service';
import { ComissionsService } from './shared/comissions/comissions.service';
import { UserService } from './shared/user/user.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    CompareDirective,
    TransactionsComponent,
    TransactionsListComponent,
    ProfileComponent,
    TransactionAddComponent
  ],
  entryComponents:[ TransactionAddComponent ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppMaterialModule,
    AppRoutingModule
  ],
  providers: [AuthGuard, NotificationService, AuthService, AppService, TransactionsServiceService, {
    provide: HTTP_INTERCEPTORS,
    useClass: ReqInterceptor,
    multi: true,
  },
  ComissionsService,
  UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
