import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@demo/api-interfaces';

import { Comment } from './class/comment';
import { User } from './class/user';

const CURRENT_USER: User = new User(1, '山田');
const ANOTHER_USER: User = new User(2, '武井');

const COMMENTS: Comment[] = [
  new Comment(ANOTHER_USER, 'お疲れ様です'),
  new Comment(ANOTHER_USER, 'この間の件どうでしたか？'),
  new Comment(CURRENT_USER, 'お疲れ様です'),
  new Comment(CURRENT_USER, 'おｋでした')
]

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  comments = COMMENTS;
  currentUser = CURRENT_USER;
  comment = "";
  // commentDateFormat = 'yyyy年mm月dd日 HH:mm';

  addComment(comment: string): void {
    if (comment) {
      this.comments.push(new Comment(this.currentUser, comment));
    }
  };
  // hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient) { }
}
