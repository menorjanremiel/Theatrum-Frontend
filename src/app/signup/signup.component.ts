import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  message: any;
  hide = true;
  clicked = false;

  constructor(private route: Router, private formBuilder: FormBuilder,private data:DataService,private snackBar: MatSnackBar) {
    this.signupForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required,Validators.maxLength(50)]),
      password: new FormControl('', [Validators.required,Validators.maxLength(50)]),
      firstname: new FormControl('', [Validators.required,Validators.maxLength(50)]),
      lastname: new FormControl('', [Validators.required,Validators.maxLength(50)]),
      username: new FormControl('', [Validators.required,Validators.maxLength(50)]),
      confirmpassword: new FormControl('', [Validators.required,Validators.maxLength(50)]),
    })
  }

  ngOnInit(): void {
  }

  signup(){
    const data: Userprofile = {
      firstname: this.signupForm.value.firstname,
      lastname: this.signupForm.value.email,
      username: this.signupForm.value.username,
      email: this.signupForm.value.email,
      password: this.signupForm.value.password,
     }
     
       this.data.apiRequest('/api/auth/register', data).subscribe(
         (res: any) => {
           if (res.status==true){
              this.snackBar.open('Sign up successfully! Redirecting...', '', {
               duration: 4000,
               verticalPosition: 'bottom',
               horizontalPosition: 'center',
             });
             this.route.navigate(['login']);
           } 
         },
         (err: any) => {
          if (err.ok==false){
            this.snackBar.open('The email has already been taken.', '', {
             duration: 4000,
             
             verticalPosition: 'bottom',
             horizontalPosition: 'center',
           });
           this.clicked = false;
         }
        }
       )
     
  
  }
}

interface Userprofile {
  email: string;
  password: string;
  username: string;
  lastname: string;
  firstname: string;
}