import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hompage',
  templateUrl: './hompage.component.html',
  styleUrls: ['./hompage.component.css']
})
export class HompageComponent implements OnInit {
  titles = ['Designer','Woodworker','Craftsman'];
  fullImagePath;
  constructor() { }

  ngOnInit() {
    this.fullImagePath = '/assets/img/birdhouse1.jpg'
  }

}
