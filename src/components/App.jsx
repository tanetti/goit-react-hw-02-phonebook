import { Component } from 'react';
import { Notify } from 'notiflix';
import { GlobalStyles } from 'components/GlobalStyles/GlobalStyles';
import { theme } from 'constants/theme';
import { Box } from 'components/Shared';
import { PageTitle } from 'components/PageTitle/PageTitle';
import { Section, Container } from 'components/Shared';
import {
  HeaderContainer,
  AddContactButton,
  AddContactIcon,
  AddContactTitle,
  Backdrop,
  SectionTitle,
} from 'components/App.styled';
import { ContactFilter } from 'components/ContactFilter/ContactFilter';
import { AddContactForm } from 'components/AddContactForm/AddContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';

Notify.init({
  position: 'right-bottom',
  distance: '20px',
  borderRadius: '8px',
  timeout: 4000,
  clickToClose: true,
  cssAnimationStyle: 'from-right',
  success: {
    background: '#2c9403',
  },
  failure: {
    background: '#db1212',
  },
});

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

    shouldAddFormRender: false,
    shouldAddFormShown: false,
  };

  toggleAddForm = () => {
    this.setState(prevState => {
      if (!prevState.shouldAddFormRender) {
        setTimeout(this.showAddForm, 0);
        onkeydown = this.onEscPress;
        return { shouldAddFormRender: true };
      }

      onkeydown = prevState.shouldAddFormShown ? null : this.onEscPress;

      return { shouldAddFormShown: !prevState.shouldAddFormShown };
    });
  };

  showAddForm = () => {
    this.setState({ shouldAddFormShown: true });
  };

  onBackdropClick = ({ currentTarget, target }) =>
    currentTarget === target && this.toggleAddForm();

  onEscPress = ({ code }) => {
    if (code !== 'Escape') return;

    this.toggleAddForm();
  };

  onNewContactAdd = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));

    this.toggleAddForm();
    Notify.success(`New contact was successfully added`);
  };

  onContactDelete = ({ currentTarget: { value: contactID } }) => {
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
          <HeaderContainer>
            <ContactFilter onFilterChange={this.onFilterChange} />
            <AddContactButton
              type="button"
              aria-label="Add new contact"
              aria-controls="contact-form"
              aria-expanded={false}
              onClick={this.toggleAddForm}
            >
              <AddContactIcon size={theme.sizes.addContactIcon} />
              <AddContactTitle>Add contact</AddContactTitle>
            </AddContactButton>
          </HeaderContainer>

          {this.state.shouldAddFormRender && (
            <Backdrop
              shouldShown={this.state.shouldAddFormShown}
              onClick={this.onBackdropClick}
            >
              <AddContactForm
                id="contact-form"
                contacts={this.state.contacts}
                shouldShown={this.state.shouldAddFormShown}
                onNewContactAdd={this.onNewContactAdd}
                onCancel={this.toggleAddForm}
              />
            </Backdrop>
          )}
        </header>

        <main>
          <PageTitle title="My awesome phonebook" />
          <Box pt={theme.sizes.headerH}>
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
          </Box>
        </main>
      </>
    );
  }
}
