import { Component, OnInit, Input } from '@angular/core';
import {BradleyService} from '../../services/bradley.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() id: any;
  commentData= {};
  showForm;

  postNewComment = function () {
    this.commentData.project = this.id;
    this.bradleyService.addNewComment(this.commentData);
  }
  
  toggleShowForm = function () {
    console.log('toggle hit')
    this.showForm = !this.showForm;
  }

  constructor(private bradleyService: BradleyService) { }

  ngOnInit() {
    this.showForm = false;
  }

}
