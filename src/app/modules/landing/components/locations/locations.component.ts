import { AfterContentInit, Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { merge, Subscription } from 'rxjs';
import { ApiService } from 'src/app/core/http/api.service';
import { Location } from 'src/app/core/models/location.model';
import {switchMap, startWith, debounceTime, distinctUntilChanged, retry} from 'rxjs/operators';
import ScrollOut from 'scroll-out';
import Splitting from 'splitting';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit, AfterContentInit, OnDestroy {

  constructor(private apiService: ApiService, private el: ElementRef) { }

  so: any;

  sub: Subscription;
  locations: Location[] = [];
  type = new FormControl('takeaway');
  query = new FormControl('');

  ngOnInit(): void {
    this.sub = merge(this.type.valueChanges, this.query.valueChanges).pipe(
      startWith({}),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(
        evt => {
          return this.apiService.getLocations(this.type.value, this.query.value);
      })
    ).subscribe({
      next: (res) => {
        this.locations = res.data;
      }
    });


    // this.type.valueChanges.subscribe( (val: string) => {
    //   this.sub = this.apiService.getLocations(val).subscribe({
    //     next: (res) => {
    //       this.locations = res.data;
    //     }
    //   });
    // });
  }

  ngAfterContentInit(): void {
    Splitting();
    this.so = ScrollOut({
      scope: this.el.nativeElement,
      targets: '.word',
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.so.teardown();
  }
}
