import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileContainerComponent} from "./profile-container/profile-container.component";
import {ProfileViewComponent} from './profile-view/profile-view.component';
import {RouterModule} from "@angular/router";
import { ProfileTableComponent } from './profile-table/profile-table.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '', component: ProfileContainerComponent, children: [
          {path: '', component: ProfileViewComponent},
        ],
      },
    ]),
    CommonModule,
  ],
  declarations: [ProfileContainerComponent, ProfileViewComponent, ProfileTableComponent]
})
export class ProfileModule {
}
