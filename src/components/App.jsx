import { Component } from 'react';
import { GlobalStyles } from 'components/GlobalStyles/GlobalStyles';
import { PageTitle } from 'components/PageTitle/PageTitle';
import { Section, Container } from 'components/Shared';
import { SectionTitle } from 'components/App.styled';
import { ContactFilter } from 'components/ContactFilter/ContactFilter';
import { AddContactForm } from 'components/AddContactForm/AddContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      { id: 'id-5', name: 'Dudka Volodymyr', number: '+38(066) 33-445-99' },
    ],
    filter: '',
  };

  onNewContactAdd = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  onContactDelete = ({ target: { value: contactID } }) => {
    this.setState(prevState => {
      const cuttedContacts = [];

      prevState.contacts.forEach(
        contact => contact.id !== contactID && cuttedContacts.push(contact)
      );

      return { contacts: cuttedContacts };
    });
  };

  onFilterChange = filterValue => {
    this.setState({ filter: filterValue });
  };

  render() {
    return (
      <>
        <GlobalStyles />
        <header>
          <button type="button">Add contact</button>
          <ContactFilter onFilterChange={this.onFilterChange} />
          <AddContactForm
            contacts={this.state.contacts}
            onNewContactAdd={this.onNewContactAdd}
          />
        </header>
        <main>
          <PageTitle title="My awesome phonebook" />
          <Section>
            <Container>
              <SectionTitle>Phonebook</SectionTitle>
              <ContactsList
                contacts={this.state.contacts}
                filter={this.state.filter}
                onContactDelete={this.onContactDelete}
              />
            </Container>
          </Section>
        </main>
      </>
    );
  }
}
