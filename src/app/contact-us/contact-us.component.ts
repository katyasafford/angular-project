import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactForm: FormGroup;
  enteredUsername;
  @Input() counterValue = 1;

  constructor() { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'message': new FormControl({ value: null, disabled: true }, [Validators.required]),
      'importance': new FormControl(1, this.evenValidator.bind(this))
    });
  }

  getDisabledBtnColor() {
    return (this.contactForm.valid) ? 'red' : 'green';
  }

  checkTextareaDisabledState() {
    (this.enteredUsername.length === 0) ? this.contactForm.controls['message'].disable() : this.contactForm.controls['message'].enable();
  }

  onFormSubmit() {
    console.log(this.contactForm);
  }

  evenValidator(control: FormControl): {[s: string]: boolean} {
    if (this.counterValue % 2 == 0) {
      return { 'isEvenForbidden': true }
    }
    return null;
  }

  patchFormValue() {
    this.contactForm.patchValue({
      importance: this.counterValue,
    });
  }

  increase() {
    this.counterValue++;
    this.patchFormValue();
  }

  decrease() {
    this.counterValue--;
    this.patchFormValue();
  }

}
