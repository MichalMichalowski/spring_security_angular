import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { LoginComponent } from '../login/login.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginData } from 'src/models/login-data';
import { AuthenticationService } from 'src/services/authentication.service';
import { SignupComponent } from '../signup/signup.component';
import { SignUpData } from 'src/models/signup-data';

@Component({
  selector: 'app-example-auth',
  templateUrl: './example-auth.component.html',
  styleUrls: ['./example-auth.component.css']
})
export class ExampleAuthComponent implements OnInit {

  @ViewChild('login_modal') loginModal: LoginComponent;
  @ViewChild('signup_modal') signUpModal: SignupComponent;

  data?: string[];

  constructor (private dataService: DataService,
              private modalService: NgbModal,
              private authService: AuthenticationService) {}

  ngOnInit(): void {
    this.dataService.getImportantData().then( d => {
      console.log(d);
    });
  }

  public openLogIn() {
    this.loginModal.openModal();
  }

  public openSignUp() {
    this.signUpModal.openModal();
  }

  public receiveLoginData(data: LoginData) {
    console.log(data);
    this.authService.postLogInData(data);
  }

  public receiveSignUpData(data: SignUpData) {
    console.log(data);
  }

}
