import { Component, OnInit, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from "@angular/common/http";
import { catchError, map, tap, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { environment } from '../environments/environment.prod'

const APIKEY = environment.APIKEY

const httpOptions = {
  headers: new HttpHeaders({
    "Authorization": APIKEY,
    "Content-Type": "application/json",
  })
}

@Injectable({
  providedIn: 'root'
})

export class YelpService {

  constructor(private http: HttpClient,) { }

  getAll(state, city, price): Observable<any[]> {
    return this.http.get<any[]>(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${city}${state}&price=${price}`,httpOptions)
    .pipe(
      tap( // Log the result or error
        data => console.log(data),
        error => console.log(error)
      )
    );
  }
}
