import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



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

  constructor(private route: Router, private formBuilder: FormBuilder) {
    this.signupForm = this.formBuilder.group({
      firstname: new FormControl('', [Validators.required,Validators.maxLength(50)]),
      email: new FormControl('', [Validators.required,Validators.maxLength(50)]),
      password: new FormControl('', [Validators.required,Validators.maxLength(50)]),
    })
  }

  ngOnInit(): void {
  }

  signup(){
    console.log("working");
    this.clicked = false
  }
}
