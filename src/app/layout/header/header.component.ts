import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {debounceTime, filter} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  links = [{text: 'Home', ip: '/home'}, {text: 'Leetcode', ip: '/leetcode'}, {text: 'Codewars', ip: '/codewars'}];
  activeLink: number;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.activeLink = 5
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      debounceTime(500)
    ).subscribe(() => {
      const currentPath = this.route.snapshot.firstChild?.routeConfig?.path;
      this.activeLink = this.links.findIndex(link => link.ip === `/${currentPath}`);

      if (this.activeLink < 0) {
        this.router.navigate(["/home"]);
      }
    });
  }
}
