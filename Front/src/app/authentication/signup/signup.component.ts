import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Login } from '../../../models/usuarios.model';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent {

  Form: FormGroup;
  Login$: Login[];
  constructor(private dataService: DataService, private fb: FormBuilder) {
    this.Form = this.fb.group({
      email: [ '', Validators.compose([ Validators.required, Validators.email ]) ],
      password: [ '', Validators.compose([ Validators.required, Validators.minLength(8) ]) ],
      name: [ '', Validators.compose([ Validators.required]) ],

    })
  }


}
