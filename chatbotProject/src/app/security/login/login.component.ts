import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from "@angular/forms";
import { Router } from '@angular/router';

import { SecurityService } from './../security.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  erros: string[];
  submit: boolean;

  errorList: any = [];

  constructor(
    public fb: FormBuilder,
    public securityService: SecurityService,
    private router: Router
    ) { }

  ngOnInit(): void {

    localStorage.clear();
    this.securityService.mostrarMenuEmitter.emit(false);

    this.loginForm = this.fb.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required,Validators.minLength(6)]],
    });
  }

  loginUser() {
    console.log(this.loginForm)
    if(!this.loginForm.valid) {
      return;
    }
    //this.submit = false;
    
    this.securityService.login(this.loginForm.value).subscribe(
      obj => {
        console.log('logou com sucesso');
        localStorage.setItem('access_token', JSON.stringify(obj));

        this.securityService.userAuthenticated = true;
        this.securityService.mostrarMenuEmitter.emit(true);

        this.router.navigateByUrl('/chathome');
      },
      error => {
        console.log('erro ao logar');
      }
    );
  }

  Validate(form: FormGroup) {
    this.errorList = [];
    Object.keys(form.controls).forEach(key => {

      const controlErrors: ValidationErrors = form.get(key).errors;
      if (controlErrors) {
        Object.keys(controlErrors).forEach(keyError => {
         /*  console.log(key + " " + keyError + " " +  controlErrors[keyError]); */
          this.errorList.push(this.errorBuilder(key,keyError));
         /*  result.push({
            'control': key,
            'error': keyError,
            'value': controlErrors[keyError]
          }); */
        });
      }
    });
    return this.loginForm.valid;
  }

  errorBuilder(key,error){
    let erro;
    switch(error){
      case 'email':
        erro = "O email não é válido!";
        break;
      case 'required':
        erro = "Por favor preencha o campo de " + key;
        break;

    }

    return erro;
  }
 
}