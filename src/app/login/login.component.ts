import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  message: any;
  hide = true;
  clicked = false;
  
  
  constructor(private route: Router, private formBuilder: FormBuilder, private data:DataService, private snackBar: MatSnackBar) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required,Validators.maxLength(50)]),
      password: new FormControl('', [Validators.required,Validators.maxLength(50)]),
    })
  }
  ngOnInit(): void {
  }


  login() {
    const data: User = {
     email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    
      this.data.apiRequest('/api/auth/login', data).subscribe(
        (res: any) => {
          if (res.status==true){
             this.snackBar.open('Logged in successfully! Redirecting...', '', {
              duration: 4000,
              verticalPosition: 'bottom',
              horizontalPosition: 'center',
            });
            this.route.navigate(['home']);
            console.log(res.status);
            console.log(res);
          }
        }  
      )
    }
  }
  
  interface User {
    email: string;
    password: string;
  }