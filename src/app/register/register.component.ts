import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user/user.service';
import { UserModel } from '../models/user.model';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { AlertService } from '../services/alert/alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  user: UserModel;
  loading = false;
  registerForm: FormGroup;
  userExists:false;

  constructor(private formBuilder: FormBuilder,
      private router: Router,
      private userService: UserService,
      private alertService: AlertService) { }

    ngOnInit() {
      this.registerForm = this.formBuilder.group({
        name: new FormControl('', Validators.required),
        surname: new FormControl('', Validators.required),
        username: new FormControl('', [Validators.required], [(control: AbstractControl): Observable<ValidationErrors | null> => 
          this.isUsernameTaken(control)]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)])
      });
    }

  
  isUsernameTaken(control: AbstractControl): Observable<ValidationErrors | null> {
      return this.userService.isUsernameTaken(control.value)
      .map(response => {
        if (response) {
          return {usernameTaken: 'Username is already taken!'};
        }
        else {
          return null;
        }
      });;
    }

  register() {
      this.loading = true;
      this.user = this.registerForm.value;
      this.userService.create(this.user)
          .subscribe(
              data => {
                this.alertService.success('Registration successful', true);
                this.router.navigate(['/login']);
              },
              error => {
                this.alertService.error(error);
                this.loading = false;
              });
  }
  
  get name() {
    return this.registerForm.get('name'); 
  }
  get surname() { 
    return this.registerForm.get('surname');
  }
  get username() {
    return this.registerForm.get('username');
  }
  get password() {
    return this.registerForm.get('password');
  }
}
