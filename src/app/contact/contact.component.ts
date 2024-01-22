import { Component } from '@angular/core';
import { CanDeactivateFn } from '@angular/router';

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