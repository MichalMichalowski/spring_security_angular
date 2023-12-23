import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleAuthComponent } from './example-auth/example-auth.component';



@NgModule({
  declarations: [
    ExampleAuthComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ExampleAuthComponent
  ]
})
export class ComponentsModule { }
