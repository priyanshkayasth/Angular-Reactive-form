import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'


function mustControlQuestionaMark(control:AbstractControl){
  if(control.value.includes('?')){
    return null;
  }
  return {doesNotContainQuestionMark:true}
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  form = new FormGroup({

    email: new FormControl('',{
      validators:[Validators.email,Validators.required]
    }),
    password: new FormControl('',{
      validators:[Validators.required,Validators.minLength(6),mustControlQuestionaMark]
    })
  })

  get emailIsInValid(){
    return this.form.controls.email.touched && this.form.controls.email.dirty && this.form.controls.email.invalid
  }

  get passwordIsInValid(){
    return this.form.controls.password.touched && this.form.controls.password.dirty && this.form.controls.password.invalid
  }

  onSubmit() {
    console.log(this.form);
    const entredEmail = this.form.value.email
    const enteredPassword = this.form.value.password
    console.log(entredEmail,enteredPassword);
    


  }
}