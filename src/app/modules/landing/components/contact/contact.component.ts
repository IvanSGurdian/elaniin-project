import { AfterContentInit, Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import ScrollOut from 'scroll-out';
import Splitting from 'splitting';
import { ApiService } from 'src/app/core/http/api.service';
import { Contact } from 'src/app/core/models/contact.model';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, AfterContentInit, OnDestroy {

  contactForm: FormGroup;
  so: any;
  messageSent = false;

  constructor(private el: ElementRef, private apiService: ApiService) { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', Validators.required)
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
    this.apiService.sendContact(this.contactForm.value).subscribe( res => {
      console.log(res);
    }, error => {
      console.log(error.error);
    }, () => {
      this.messageSent = true;
    });
  }

}
