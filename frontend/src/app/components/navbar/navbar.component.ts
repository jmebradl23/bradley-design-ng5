import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  projects;

  constructor() { }

  ngOnInit() {
    this.projects = [
      {
        title: 'Birdhouses',
        link: 'birdhouses'
      },
      {
        title: 'Mailboxes',
        link: 'mailboxes'
      },
      {
        title: 'Miniature Houses',
        link: 'miniaturehouses'
      },
      {
        title: 'Pethouses',
        link: 'pethouses'
      }
    ];
  }

}
