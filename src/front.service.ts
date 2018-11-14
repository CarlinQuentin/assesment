import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Observable } from '../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})

export class FrontService {


  constructor(
    private http: HttpClient
  ) { }

  fetch(term, location, price) {
    const options = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer RXWlykuaYYum6iqpX1rCRfHG810tY5xm5WW9DWDaZr4tevHQhHBKeFIxl28Pix5FhSjHTTwqUCU3X4-yQ0-M9mIxdvjN6WZh23n40mb8QgjGzTMYjo-7yGwqv_bqW3Yx'
      })
    }
    return this.http
      .get(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}?${price}`, options)
      .pipe(tap(info => console.log(info)))
    
  }

}
