import {Component} from '@angular/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {Home} from './components/home/home';
import {AboutComponent} from './components/about/about.component';
import {FriendListComponent} from './components/friend-list/friend-list.component';

@Component({
  selector: 'seed-app',
  providers: [],
  pipes: [],
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'app/seed-app.html',
})
@RouteConfig([
  { path: '/home',       component: Home,        name: 'Home', useAsDefault: true },
  { path: '/friends', component: FriendListComponent, name: 'Friend' },
  { path: '/about', component: AboutComponent, name: 'About'}
])
export class SeedApp {

  constructor() {}

}
