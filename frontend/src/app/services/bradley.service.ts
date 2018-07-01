import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class BradleyService {

  constructor(private http: Http) { }
  comments = []
  
  getComments() {
    this.http.get('http://localhost:3000/comments').subscribe(res => {
      this.comments = res.json();
    })
  }

  addNewComment(commentData) {
    this.http.post('http://localhost:3000/comment', commentData).subscribe(res => {
    console.log(res);
    })
}

}