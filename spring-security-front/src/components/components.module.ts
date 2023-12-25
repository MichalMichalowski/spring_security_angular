import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleAuthComponent } from './example-auth/example-auth.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ExampleAuthComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule
  ],
  exports: [
    ExampleAuthComponent
  ]
})
export class ComponentsModule { }
