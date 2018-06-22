import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  authForm: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder, private router:Router) {
  }

  ngOnInit() {
    this.createForm();
  }

  authenticate() {
    if (this.authForm.valid) {
      this.authService.authenticate(this.authForm.getRawValue()).subscribe((r) => {
        this.router.navigate(['notes']);
      }, error2 => {

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
