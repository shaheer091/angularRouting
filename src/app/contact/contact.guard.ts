import { CanDeactivateFn } from '@angular/router';
import { ContactComponent } from './contact.component';

export const canExit: CanDeactivateFn<ContactComponent> = (
  component: ContactComponent
) => {
  if ((component.firstName || component.lastName || component.message ) && !component.isSubmitted) {
    return confirm('You have unsaved changes, Do you wnat to navigate away?');
  } else {
    return true;
  }
};
