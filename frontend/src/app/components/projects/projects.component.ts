import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  project: any;
  id: string;
  data: any;
  title: string;

  // Adding ActivatedRoute to grab params
  constructor(private route: ActivatedRoute) {
    //   Accessing data passed down from RouterModule.forRoot() method in app.module
      this.data = route.snapshot.data;
  }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        this.id=params.get('project-name');
        this.project = this.data[this.id];
        if(this.id==='birdhouses') {this.title='Birdhouses'}
        else if(this.id==='mailboxes') {this.title='Mailboxes'}
        else if(this.id==='miniaturehouses') {this.title='Miniature Houses'}
        else if(this.id==='pethouses') {this.title='Pet Houses'}
        else {this.title="This title not found, but this"}
    });
    console.log('id is: ', this.id)
  }
}
