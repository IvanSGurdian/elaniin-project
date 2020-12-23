import { AfterContentInit, Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import ScrollOut from 'scroll-out';
import Splitting from 'splitting';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.scss']
})
export class MenuHeaderComponent implements OnInit, AfterContentInit, OnDestroy {

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
