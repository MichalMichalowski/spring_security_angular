import { Component, EventEmitter, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { SignUpData } from 'src/models/signup-data';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit  {
  
  @ViewChild('modal') modal: TemplateRef<any>;
  @Output() outSignUpData = new EventEmitter<SignUpData>();
  private modalRef: NgbModalRef;

  signUpForm: FormGroup;

  constructor(private modalService: NgbModal,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      name: ['', Validators.required],
      login: ['', Validators.required],
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
    if (this.signUpForm.valid) {
      const signUpData = this.signUpForm.value;
      this.outSignUpData.emit(signUpData);
      this.closeModal();
    }
  }


}
