import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { LoginComponent } from '../login/login.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginData } from 'src/models/login-data';

@Component({
  selector: 'app-example-auth',
  templateUrl: './example-auth.component.html',
  styleUrls: ['./example-auth.component.css']
})
export class ExampleAuthComponent implements OnInit {

  @ViewChild('login_modal') loginModal: LoginComponent;

  data?: string[];

  constructor (private dataService: DataService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.dataService.getImportantData().then( d => {
      console.log(d);
    });
  }

  public open() {
    this.loginModal.openModal();
  }

  public receiveLoginData(data: LoginData) {
    console.log(data);
  }

}
