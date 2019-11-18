import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contact: any
  contactList = [{
    name: 'Ania',
    surname: 'ziel',
    number: '75483'
  }];

  onContactAdded(contact) {
    this.contactList.push(contact)
  }



 

}
