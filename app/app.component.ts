import { Component } from '@angular/core';

enum CheckBoxType {
  APPLY_FOR_JOB,
  MODIFY_A_JOB,
  NONE,
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentlyChecked = 0;

  selectCheckBox(event) {
    debugger;
    // If the checkbox was already checked, clear the currentlyChecked variable
    //    if (this.currentlyChecked === targetType) {
    //      this.currentlyChecked = 2;
    //      return;
    //  }

    this.currentlyChecked = event;
  }
}
