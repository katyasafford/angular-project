import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule  } from '@angular/router/testing';
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { AppMaterialModule } from './app-material';
import { appRoutes } from './app-routing.module';

describe('AppComponent', () => {
  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        ContactUsComponent
      ],
      imports: [
        RouterTestingModule.withRoutes(appRoutes),
        AppMaterialModule,
        ReactiveFormsModule
      ]
    })

    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(AppComponent);

    router.initialNavigation();
  })

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('navigate to "contact" takes you to /contact', fakeAsync(() => {
    router.navigate(['contact'])
      .then(() => {
        expect(router.url).toEqual('/contact');
      });
  }));

  it('navigating to route that does not exist takes you to "/"', fakeAsync(() => {
    router.navigate(['heyo'])
      .then(() => {
        expect(router.url).toEqual('/');
      });
  }));

});
