import { Component, OnInit, Input } from '@angular/core';
import { UserModel } from '../../../models/user.model';

@Component({
  selector: 'app-profile-table',
  templateUrl: './profile-table.component.html',
  styleUrls: ['./profile-table.component.css']
})
export class ProfileTableComponent {

  @Input() userProfile: UserModel;

}
