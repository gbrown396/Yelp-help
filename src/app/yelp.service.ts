import { Component, OnInit, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from "@angular/common/http";
import { catchError, map, tap, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    "Authorization": "Bearer xBl7DcDtVsINtLsjcA13zrX18IAL5nUlMl8uJUhHBy-cnMJidVLNKjPQ65HXJc7Uy1jmnxuHkEwx_7tejQ_NzFZz1eGa2M5wzSZi24q22JgCzI2eIaVZKVT14pcaXHYx"
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
