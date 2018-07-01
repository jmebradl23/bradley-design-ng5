import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BradleyService } from './services/bradley.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentComponent } from './components/comment/comment.component';

const routes = [
  {path: "comment", component:CommentComponent},
  {path: "comments", component:CommentsComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [BradleyService],
  bootstrap: [AppComponent]
})
export class AppModule { }