import {ChangeDetectorRef, Component, EventEmitter, Output} from '@angular/core';
import {TweetService} from '../../../services/tweet/tweet.service';
import {NgForm} from '@angular/forms';
import { TweetModel } from '../../../models/tweet.model';

@Component({
  selector: 'app-create-tweet',
  templateUrl: './create-tweet.component.html',
  styleUrls: ['./create-tweet.component.css'],
})
export class CreateTweetComponent {
  tweetSavedStatus = {fail: false, success: false};
   @Output() tweetCreated = new EventEmitter<TweetModel>();

  constructor(private tweetService: TweetService, private cd: ChangeDetectorRef) {
  }

  isSubmitButtonDisabled(form: NgForm): boolean {
    return form.invalid || form.submitted;
  }

  onFormSubmit(form: NgForm) {
    if (form.valid) {
      this.tweetService.create(form.value.tweetContent).subscribe(
        (tweet) => {
          this.handleTweetSave(form, {fail: false, success: true});
          this.tweetCreated.emit(tweet);
        },
        () => {
          this.handleTweetSave(form, {fail: true, success: false});
        }
      );
    }
  }

  private handleTweetSave(form: NgForm, tweetSavedStatus: any) {
    this.tweetSavedStatus = tweetSavedStatus;
    form.resetForm();
    this.cd.detectChanges();
  }

  onTweetContentFocus() {
    this.tweetSavedStatus = {fail: false, success: false};
  }

}
