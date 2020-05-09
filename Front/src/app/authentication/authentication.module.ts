import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotfoundComponent } from './404/not-found.component';
import { LockComponent } from './lock/lock.component';
import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login2.component';
import { SignupComponent } from './signup/signup.component';
import { Signup2Component } from './signup2/signup2.component';
import { AuthenticationRoutes } from './authentication.routing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgFallimgModule } from 'ng-fallimg';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(AuthenticationRoutes),
    NgFallimgModule.forRoot({
      default: '../../assets/images/gallery/IMGNotFound.jpg',
    })
  ],
  declarations: [
    NotfoundComponent,
    LoginComponent,
    SignupComponent,
    LockComponent,
    Login2Component,
    Signup2Component,
    LoginComponent
  ]
})
export class AuthenticationModule {}
