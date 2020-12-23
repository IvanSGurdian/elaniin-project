import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  menuBar: boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
      if (event.url === '/menu') {
        this.menuBar = true;
      } else {
        this.menuBar = false;
      }
    });
  }

  ngAfterViewInit(): void {
    const navbar = document.querySelector('.fixed-top');

    window.onscroll = () => {
      if (window.scrollY > 100) {
        navbar.classList.add('scrolled', 'navbar-dark');
      } else {
        navbar.classList.remove('scrolled', 'navbar-dark');
      }
    };
  }

}
