import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactForm: FormGroup;
  enteredUsername;

  constructor() { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'message': new FormControl({value: null, disabled: true}, [Validators.required])
    });
  }

  checkTextareaDisabledState() {
    (this.enteredUsername.length === 0) ? this.contactForm.controls['message'].disable() : this.contactForm.controls['message'].enable();
  }

  onFormSubmit() {
    //console.log(this.contactForm);
  }

}