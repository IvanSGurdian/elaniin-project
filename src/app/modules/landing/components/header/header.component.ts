import { AfterContentInit, Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import ScrollOut from 'scroll-out';
import Splitting from 'splitting';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterContentInit, OnDestroy {

  so: any;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    Splitting();
    this.so = ScrollOut({
      scope: this.el.nativeElement,
      targets: '.word',
    });
  }

  ngOnDestroy(): void {
    this.so.teardown();
  }
}
