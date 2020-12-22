import { AfterContentInit, Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import ScrollOut from 'scroll-out';
import Splitting from 'splitting';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent implements OnInit, AfterContentInit, OnDestroy {

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
