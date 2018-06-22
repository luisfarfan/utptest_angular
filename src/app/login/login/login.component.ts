import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  authForm: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.createForm();
  }

  authenticate() {
    if (this.authForm.valid) {
      this.authService.authenticate(this.authForm.getRawValue()).subscribe(() => {

      });
    }
  }

  createForm() {
    this.authForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

}
