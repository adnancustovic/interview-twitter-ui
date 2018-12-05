import { Component, Input } from '@angular/core';
import { ProfileModel } from '../../../models/profile.model';

@Component({
  selector: 'app-profile-table',
  templateUrl: './profile-table.component.html',
  styleUrls: ['./profile-table.component.css']
})
export class ProfileTableComponent {

  @Input() userProfile: ProfileModel;

}
