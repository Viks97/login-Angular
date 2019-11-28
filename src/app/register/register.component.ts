import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
  submitted=false;
  constructor(private formbuilder:FormBuilder) { }
  ngOnInit() {
  this.registerForm=this.formbuilder.group({
    jobID: ['',[Validators.required]],
    email: ['',[Validators.required,Validators.email]],
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]]

  }
  );

}
get f(){return this.registerForm.controls;}

onSubmit() {
 this.submitted = true;

 // stop here if form is invalid
 if (this.registerForm.invalid) {
     return;
 }

 // display form values on success
 alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
}

onReset() {
 this.submitted = false;
 this.registerForm.reset();
}




}
