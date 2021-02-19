import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  @ViewChild('emailInput') emailInput: ElementRef
  @ViewChild('passwordInput') passwordInput: ElementRef

  constructor(
    private loginService: LoginService,
    private router: Router
    ){}

  email: string;
  password: string;
  estaCarregando: boolean;
  erroNoLogin: boolean;

  onSubmit(form){
    this.erroNoLogin = false
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
    this.login()
  }

  login(){
    this.estaCarregando = true;
    this.loginService.logar(this.email, this.password)
    .pipe(
      finalize(()=> this.estaCarregando = false)
    )
    .subscribe(
      response => this.router.navigate(['home']),
      error => {
        this.erroNoLogin = true;
        console.log(error)
      },
    )

  }

  exibeErro(nomeControle: string, form: NgForm){
    if(!form.controls[nomeControle]){
      return false;
    }
    return form.controls[nomeControle].invalid && form.controls[nomeControle].touched;
  }
}
