import { Component, Input, OnInit } from '@angular/core';
import { Location } from 'src/app/core/models/location.model';

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.scss']
})
export class LocationCardComponent implements OnInit {

  @Input() location: Location;
  openingTime = new Date();
  closingTime = new Date();

  constructor() { }

  ngOnInit(): void {
    const opTime = this.convertTime(this.location.opening_time);
    const closeTime = this.convertTime(this.location.closing_time);

    this.openingTime.setHours(+opTime[0]);
    this.openingTime.setMinutes(+opTime[1]);
    this.openingTime.setSeconds(+opTime[2]);

    this.closingTime.setHours(+closeTime[0]);
    this.closingTime.setMinutes(+closeTime[1]);
    this.closingTime.setSeconds(+closeTime[2]);


  }

  convertTime(timeString: string): string[] {
    const [hours, minutes, seconds] = timeString.split(':');
    return [hours, minutes, seconds];
  }

}
