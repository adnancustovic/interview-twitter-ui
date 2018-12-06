import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {TweetModel} from "../../../models/tweet.model";
import {TweetService} from "../../../services/tweet/tweet.service";
import {Observable} from "rxjs/Observable";
import {AuthService} from "../../../services/auth.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-user-tweets-view',
  templateUrl: './user-tweets-view.component.html',
  styleUrls: ['./user-tweets-view.component.css']
})
export class UserTweetsViewComponent implements OnInit {
  tweetRecieved: TweetModel;
  $tweets: Observable<TweetModel[]>;
  userName: string;

  constructor(private tweetService: TweetService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.userName = params['username'];
      this.$tweets = this.tweetService.fetchForUser(this.userName);
    });
  }

  onTweetCreated(tweet: TweetModel) {
    this.tweetRecieved = tweet;
  }

}
