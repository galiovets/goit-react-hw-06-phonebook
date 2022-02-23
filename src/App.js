import './App.css';
import Container from './components/Container';
import { PhonebookTitle, ContactTitle } from './components/Title/Title.styled';
import Form from './components/Form';
import ContactsList from './components/Contacts/ContactList';
import Filter from './components/Filter';

export default function App() {
  return (
    <Container>
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <Form />
      <ContactTitle>Contacts</ContactTitle>
      <Filter />
      <ContactsList />
    </Container>
  );
}
