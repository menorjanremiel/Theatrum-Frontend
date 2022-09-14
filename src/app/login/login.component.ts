import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
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
  
  
  constructor(private route: Router, private formBuilder: FormBuilder, private loginData:LoginService, private snackBar: MatSnackBar) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required,Validators.maxLength(50)]),
      password: new FormControl('', [Validators.required,Validators.maxLength(50)]),
    })
  }
  ngOnInit(): void {
  }


  login() {
    const loginData: User = {
     email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    
      this.loginData.apiRequest('/api/auth/login', loginData).subscribe(
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