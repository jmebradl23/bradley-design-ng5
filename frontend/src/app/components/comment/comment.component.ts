import { Component, OnInit } from '@angular/core';
import {BradleyService} from '../../services/bradley.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  commentData= {};

  postNewComment = function () {
    this.bradleyService.addNewComment(this.commentData);
    console.log(this.commentData);
  }

  constructor(private bradleyService: BradleyService) { }

  ngOnInit() {
  }

}
