import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BradleyService } from './services/bradley.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {NgbModule, NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentComponent } from './components/comment/comment.component';
import { HompageComponent } from './components/hompage/hompage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectComponent } from './components/project/project.component';
import { ProjectsComponent } from './components/projects/projects.component';

const projects = {
  birdhouses: [
    {
      title: "5-Chamber Design",
      text: "This birdhouse was built in 2015 and designed from a photograph of the client's childhood home.",
      features: [
          "5 separate compartments","Front and back dormers with perch","Front door/windows"
      ],
      images: ['assets/img/birdhouse1.jpg','assets/img/birdhouse2.jpg','assets/img/birdhouse3.jpg']
    },
    {
      title: "Cylindrical Birdfeeder",
      text: "This one of a kind cylindrical design was built with numerous divisions circling the full length of the structure providing plenty space on one feeder.",
      features: ["Cylindrical body","Shingled rooftop","12 separate feeding compartments with perch"],
      images: ['assets/img/cylbirdhouse1.jpg']
    }
  ],
  mailboxes: [
    {
      title: "Panel Design Mailbox",
      text: "This mailbox was built in 2008 and the design was loosely modeled after Larry's home residence.",
      features: ["Cottage lap siding","Fish-scale style roof","Vertically hinged front door","Handcrafted heart icons"],
      images: ['assets/img/mailbox1.jpg','assets/img/mailbox2.jpg','assets/img/mailbox3.jpg']
    },
    {
      title: "Brick Design Mailbox",
      text: "This mailbox was built in 2008 for a neighbor.",
      features: ["Batten seam roof","Brick painted siding","Vertically hinged front door"],
      images: ['assets/img/brickhouse1.jpg','assets/img/brickhouse2.jpg']
  }
  ],
  miniaturehouses: [
    {
        title: "Half Timber Model",
        text: "This miniature house was built for a family friend's garden. Inspired by German architecture, this is a half-timber model complete with shutters and window boxes.",
        features: ["Detailed windows and doors","Batten seam roof"],
        images: ['assets/img/miniaturehouse1.jpg','assets/img/miniaturehouse2.jpg','assets/img/miniaturehouse3.jpg',]
    }
  ],
  pethouses: [
    {
        title: "3-Tiered Cat Castle",
        text: "This cat castle design was built for two cats: \"The Queen\" and \"Goddess\". Plenty of space in this three level design so each cat has plenty of room to sit on her perch and watch over her kingdom.",
        features: ["Penthouse with double balcony","Mid-level servants quarters","Bottom level for lowly guests","Includes side cabinet with adjustable shelves"],
        images: ['assets/img/cathouse1.jpg','assets/img/cathouse2.jpg','assets/img/cathouse3.jpg']
    },
    {
      title: "Raised Doghouse",
      text: "This doghouse was built for the biggest furry cuddle bug you've ever seen. Complete with rear vents to keep this dog cool in the summertime, Bruce, the pit bull, loves his home away from home.",
      features: ["Cottage lap siding","Raised platform design","Shingled rooftop","Rear double vents"],
      images: ['assets/img/pethouse1.jpg','assets/img/pethouse2.jpg','assets/img/pethouse3.jpg']
    }
  ]
};

const routes = [
  {path: "comment", component:CommentComponent},
  {path: "comments", component:CommentsComponent},
  {path: "", component: HompageComponent},
  {path: 'projects/:project-name', component: ProjectsComponent, data: projects}
];


@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent,
    CommentComponent,
    HompageComponent,
    NavbarComponent,
    ProjectComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [BradleyService, NgbDropdownConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }