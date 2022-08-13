import { Component } from 'react';
import { GlobalStyles } from 'components/GlobalStyles/GlobalStyles';
import { theme } from 'constants/theme';
import { Box } from 'components/Shared';
import { PageTitle } from 'components/PageTitle/PageTitle';
import { Section, Container } from 'components/Shared';
import {
  HeaderContainer,
  AddContactIcon,
  AddContactButton,
  Backdrop,
  SectionTitle,
} from 'components/App.styled';
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

    shouldAddFormRender: false,
    shouldAddFormShown: false,
  };

  toggleRenderAddForm = () => {
    this.setState(prevState => {
      if (!prevState.shouldAddFormRender) {
        setTimeout(this.showAddForm, 0);
        return { shouldAddFormRender: true };
      }

      return { shouldAddFormShown: !prevState.shouldAddFormShown };
    });
  };

  showAddForm = () => {
    this.setState({ shouldAddFormShown: true });
  };

  onNewContactAdd = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
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
            <AddContactButton
              type="button"
              aria-label="Add new contact"
              aria-controls="contact-form"
              aria-expanded={false}
              onClick={this.toggleRenderAddForm}
            >
              <AddContactIcon size={theme.sizes.addContactIcon} />
            </AddContactButton>
            <ContactFilter onFilterChange={this.onFilterChange} />

            {this.state.shouldAddFormRender && (
              <Backdrop shouldShown={this.state.shouldAddFormShown}>
                <AddContactForm
                  id="contact-form"
                  contacts={this.state.contacts}
                  onNewContactAdd={this.onNewContactAdd}
                />
              </Backdrop>
            )}
          </HeaderContainer>
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
