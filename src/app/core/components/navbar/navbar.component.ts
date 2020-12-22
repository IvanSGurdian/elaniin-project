import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
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
