import { Component, OnInit, NgModule } from '@angular/core';
import { YelpService } from '../yelp.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  state: string;
  city: string;
  price: number;
  resturantsForm: FormGroup
  restaurants: any;

  constructor(private fb: FormBuilder,private ys: YelpService) { }

  ngOnInit() {
    this.resturantsForm = this.fb.group({
      state: new FormControl(),
      city: new FormControl(),
      price: new FormControl()
    })
  }

  getAll() {
    this.ys.getAll(
      this.resturantsForm.value.state,
      this.resturantsForm.value.city,
      this.resturantsForm.value.price
      ).subscribe((res: any) => this.restaurants = res.businesses[Math.floor(Math.random()*res.businesses.length)])
      
  }

}