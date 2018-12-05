import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserModel} from "../../models/user.model";
import { Observable } from 'rxjs';
import { ProfileModel } from '../../models/profile.model';

const ENDPOINT_PROFILE = '/api/profile';
const ENDPOINT_USERNAME_VALIDATE = '/api/validate';
const ENDPOINT_REGISTER = '/api/register';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  fetch(): Observable<ProfileModel> {
    return this.http.get<ProfileModel>(ENDPOINT_PROFILE);
  }

  isUsernameTaken(username: string): Observable<boolean> {
    return this.http.get<boolean>(ENDPOINT_USERNAME_VALIDATE + "/" + username);
  }

  create(user: UserModel) {
      return this.http.post(ENDPOINT_REGISTER, user);
  }

}