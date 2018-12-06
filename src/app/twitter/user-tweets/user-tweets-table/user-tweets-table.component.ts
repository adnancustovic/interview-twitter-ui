import {Component, Input, SimpleChanges} from '@angular/core';
import {TweetModel} from "../../../models/tweet.model";

@Component({
  selector: 'app-user-tweets-table',
  templateUrl: './user-tweets-table.component.html',
  styleUrls: ['./user-tweets-table.component.css']
})
export class UserTweetsTableComponent {

  @Input() tweets: TweetModel[];
  @Input() tweetAdded: TweetModel;

  ngOnChanges() {
    if (this.tweetAdded != null &&  !this.tweets.find(x => x.id === this.tweetAdded.id)) 
    //this.tweets.push(this.tweetAdded);
    this.tweets = [this.tweetAdded,...this.tweets];
  }

}
