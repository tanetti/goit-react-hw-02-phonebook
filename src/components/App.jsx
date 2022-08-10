import { GlobalStyles } from 'components/GlobalStyles';
import { PageTitle } from 'components/PageTitle/PageTitle';
import { PhonebookSection } from './PhonebookSection/PhonebookSection';

export const App = () => {
  return (
    <main>
      <GlobalStyles />
      <PageTitle title="My awesome phonebook" />
      <PhonebookSection title="Phonebook" />
    </main>
  );
};
