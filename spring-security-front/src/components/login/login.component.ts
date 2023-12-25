import { Component, EventEmitter, OnInit, Output, TemplateRef, ViewChild, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { LoginData } from 'src/models/login-data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('modal') modal: TemplateRef<any>;
  @Output() outLoginData = new EventEmitter<LoginData>();
  private modalRef: NgbModalRef;

  logInForm: FormGroup;

  constructor(private modalService: NgbModal,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.logInForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  openModal() {
    this.modalRef = this.modalService.open(this.modal, { centered: true });
  }

  closeModal() {
    if (this.modalRef) {
      this.modalRef.close();
    }
  }

  onDataSubmit() {
    if (this.logInForm.valid) {
      const loginData = this.logInForm.value;
      this.outLoginData.emit(loginData);
      this.closeModal();
    }
  }

}
