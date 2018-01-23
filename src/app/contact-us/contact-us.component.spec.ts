import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule} from '@angular/material';

import { ContactUsComponent } from './contact-us.component';
import { AppMaterialModule } from '../app-material';
import { evenValidator } from './contact-us.component';

describe('ContactUsComponent', () => {
  let component: ContactUsComponent;
  let fixture: ComponentFixture<ContactUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactUsComponent ],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        AppMaterialModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    //component.ngOnInit();
  });

  it('should increase counter value when + button is clicked', () => {
    let plusBtn = fixture.debugElement.nativeElement.querySelector('#plus-btn');
    plusBtn.click();

    let importance = component.contactForm.controls['importance'];

    //initial value is 1, so after one button click it should be 2
    expect(importance.value).toEqual(2);
  });

  it('should descrease counter value when - button is clicked', () => {
    let minusBtn = fixture.debugElement.nativeElement.querySelector('#minus-btn');
    minusBtn.click();

    let importance = component.contactForm.controls['importance'];

    //initial value is 1, so after one button click it should be 0
    expect(importance.value).toEqual(0);
  });

  it('form should be invalid when empty', () => {
    expect(component.contactForm.valid).toBeFalsy();
  });

  it('message field should initially be disabled', () => {
    let message = component.contactForm.controls['message'];
    expect(message.disabled).toBeTruthy();
  });

  it('username field should be required', () => {
    let errors = {};
    let username = component.contactForm.controls['username'];
    expect(username.valid).toBeFalsy();

    errors = username.errors || {};
    expect(errors['required']).toBeTruthy();

    username.setValue('Katya');
    errors = username.errors || {};
    expect(errors['required']).toBeFalsy();
  });

});
