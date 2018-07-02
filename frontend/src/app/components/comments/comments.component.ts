import { Component, OnInit, Input } from '@angular/core';
import { BradleyService } from '../../services/bradley.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() id: any;
  commmentsData = {};

  constructor(private bradleyService: BradleyService) { }

  ngOnInit() {
    this.bradleyService.getComments();
    console.log(this.id)
  }
}
