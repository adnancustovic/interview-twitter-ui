import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserModel} from "../../models/user.model";
import { Observable } from 'rxjs';

const ENDPOINT_BASE = '/api/profile';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  fetch(): Observable<UserModel> {
    return this.http.get<UserModel>(ENDPOINT_BASE);
  }
}