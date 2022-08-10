import { Component } from 'react';
import { AddContactForm } from './AddContactForm/AddContactForm';

export class Phonebook extends Component {
  state = {
    contacts: [],
    name: '',
  };

  onNewContactSubmit = contact => {
    console.log(contact);
  };

  render() {
    console.log(this.state.contacts);

    return (
      <AddContactForm
        contacts={this.state.contacts}
        onNewContactSubmit={this.onNewContactSubmit}
      />
    );
  }
}
