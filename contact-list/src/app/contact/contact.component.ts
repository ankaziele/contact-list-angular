import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ContactsComponent } from '../contacts/contacts.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  firstName: string = '';
  lastName: string = '';
  phoneNumber: number;
  contact: {
    name: string;
    surname: string;
    number: number;
  };



  @Output() contactAdded = new EventEmitter<object>()

  constructor() { }

  ngOnInit() {
  }


  onSaveClicked() {
   this.contact = {
      name: this.firstName,
      surname: this.lastName,
      number: this.phoneNumber
    }
    this.contactAdded.emit(this.contact)
    console.log(this.firstName)
    this.firstName = '';
    this.lastName = '';
    this.phoneNumber = undefined;


  }



}
