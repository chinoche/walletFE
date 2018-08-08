import {Component, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { NotificationService } from './shared/notification/notification.service';
import {Router, RouterOutlet} from '@angular/router';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  title = 'walletWeek';
  sidebarVisible: boolean = false;
  links = [
    { path: '/dashboard', icon: 'home', label: 'Dashboard' },
    { path: '/transactions', icon: 'list', label: 'Transacciones' },
    { path: '/profile', icon: 'face', label: 'Perfil' }
  ];

  constructor( private snackBar: MatSnackBar,
               private ns: NotificationService,
               private router: Router,
               public appService: AppService) {
  }

  ngOnInit() {
    this.ns.notification$
      .subscribe((notification) => this.showNotification(notification));
  }

  ngOnChanges(changes: SimpleChanges): void {
    let lolo = this.appService.get('walletSession')
    console.warn(lolo)
  }

  showNotification(notification) {
    this.snackBar.open(notification, 'Ok', {
      duration: 3000
    });
  }

  prepareRouterState( router: RouterOutlet) {
    return router.activatedRouteData['animation'] || 'initial';
  }

  activeUser() {
    this.sidebarVisible = null !== localStorage.getItem('jwid')
    return null !== localStorage.getItem('jwid');
  }

  logOut() {
    this.appService.destroy().then(() => {
      this.router.navigate(['login']);
    })
  }

}
