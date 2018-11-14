import { Component, OnInit, getModuleFactory } from '@angular/core';
import { FrontService } from '../../front.service'
import { FormControl, FormGroup } from '@angular/forms';
import { getNumberOfCurrencyDigits } from '../../../node_modules/@angular/common';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {


  Search = new FormGroup ({
    term: new FormControl(''),
    location: new FormControl(''),
    price: new FormControl(''),
  })

  info;
  data;
  ndata;
  number;

  constructor(
    private fronts: FrontService
  ) { }

  ngOnInit() {
  }

  fetch(): void{
    let items = this.Search.value
    let term = items.term
    let location = items.location
    let price = items.price
    let number = Math.floor(Math.random() * 10);
    this.fronts.fetch(term, location, price).subscribe(infos => {
      this.info = infos
      this.data = this.info.businesses
      this.ndata = this.data[number]
      console.log('im here', number)
      console.log("here is the info", this.ndata)
    })
  }

  reload(){
    location.reload();
  }

}
