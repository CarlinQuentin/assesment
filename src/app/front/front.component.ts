import { Component, OnInit } from '@angular/core';
import { FrontService } from '../../front.service'

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {

  info$

  constructor(
    private front: FrontService
  ) { }

  ngOnInit() {
  }

  fetch(){
    this.front.fetch().subscribe(front => {
      this.info$ = front
      console.log("here is the info", this.info$)
    })
  }

}
