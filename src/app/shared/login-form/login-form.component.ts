import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup = this._FormBuilder.group({
    username: [''],
  })

  formKeysList: any[] = [];

  constructor(private _FormBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formKeysList.push(
      Object.keys(
        this.loginForm.controls
      )
    )
  }

  public onSubmitPlayer() {
    console.log(this.loginForm.value);
    console.log(this.formKeysList);
  }

}
