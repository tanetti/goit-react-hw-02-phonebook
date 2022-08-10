import PropTypes from 'prop-types';
import { Section, Container } from 'components/Shared';
import { SectionTitle } from './PhonebookSection.styled';
import { Phonebook } from 'components/Phonebook/Phonebook';

export const PhonebookSection = ({ title }) => {
  return (
    <Section>
      <Container>
        <SectionTitle>{title}</SectionTitle>
        <Phonebook />
      </Container>
    </Section>
  );
};

PhonebookSection.propTypes = {
  title: PropTypes.string.isRequired,
};
