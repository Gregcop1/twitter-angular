import { Component } from '@angular/core';
import {NavLink} from '@interfaces';

@Component({
  selector: 'app-the-main-nav',
  templateUrl: './the-main-nav.component.html',
  styleUrls: ['./the-main-nav.component.scss']
})
export class TheMainNavComponent {
  public links: NavLink[] = [
    {icon: 'fa-home', label: 'Accueil', routePath: ''},
    {icon: 'fa-bell-o', label: 'Mes tweets', routePath: 'my-tweets'},
  ];
}
