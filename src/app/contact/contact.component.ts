import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  firstName: string = '';
  lastName: string = '';
  country: string = 'India';
  message: string = '';

  isSubmitted: boolean = false;

  onSubmit() {
    this.isSubmitted = true;
  }
}
