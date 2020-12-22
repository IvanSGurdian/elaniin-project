import { AfterContentInit, Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import ScrollOut from 'scroll-out';
import Splitting from 'splitting';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, AfterContentInit, OnDestroy {

  contactForm: FormGroup;
  so: any;
  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      message: new FormControl('')
    });
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

  onSubmit(): void {
    console.log(this.contactForm.value);
  }

}
