import { Component } from 'react';
import { AddContactForm } from './AddContactForm/AddContactForm';

export class Phonebook extends Component {
  state = {
    contacts: [
      { name: 'Vlad', phone: '8066' },
      { name: 'GoPPer', phone: '806633' },
    ],
    name: '',
  };

  onNewContactAdd = contact => {
    console.log(contact);
  };

  render() {
    return (
      <AddContactForm
        contacts={this.state.contacts}
        onNewContactAdd={this.onNewContactAdd}
      />
    );
  }
}
