import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  @ViewChild('emailInput') emailInput: ElementRef
  @ViewChild('passwordInput') passwordInput: ElementRef

  email: string;
  password: string;

  onSubmit(form){
    if(!form.valid){
      form.controls.email.markAsTouched();
      form.controls.password.markAsTouched();

      if(form.controls.email.invalid){
        this.emailInput.nativeElement.focus();
        return;
      } else {
        this.passwordInput.nativeElement.focus();
        return;
      }
    }
  }

  exibeErro(nomeControle: string, form: NgForm){
    if(!form.controls[nomeControle]){
      return false;
    }
    return form.controls[nomeControle].invalid && form.controls[nomeControle].touched;
  }
}
