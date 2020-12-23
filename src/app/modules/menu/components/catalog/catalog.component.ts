import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { merge, Observable, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, startWith, switchMap } from 'rxjs/operators';
import { ApiService } from 'src/app/core/http/api.service';
import { Menu } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  categories$ = this.apiService.getCategories();
  menu$: Observable<Menu>;

  filter = new FormControl('');
  category = new FormControl('');
  firstLoad = true;
  page = new FormControl();

  ngOnInit(): void {
    this.menu$ = merge(this.filter.valueChanges, this.category.valueChanges, this.page.valueChanges).pipe(
      startWith({}),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(
        evt => {
          this.firstLoad = false;
          return this.apiService.getMenu(this.category.value, this.filter.value, this.page.value);
      })
    );
  }
}
