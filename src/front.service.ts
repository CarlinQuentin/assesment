import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FrontService {

  constructor(
    private http: HttpClient
  ) { }

  fetch() {
    return this.http
      .get("https://api.yelp.com/v3/businesses/search?term=coffee&latitude=39.966917&longitude= -86.008111")
      .pipe(tap(info => console.log(info)))
  }

}
