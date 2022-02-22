import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import Container from './components/Container';
import { PhonebookTitle, ContactTitle } from './components/Title/Title.styled';
import Form from './components/Form';
import ContactsList from './components/Contacts/ContactList';
import Filter from './components/Filter';
import actions from './redux/contacts/contacts-actions';
import { getContact } from './redux/contacts/contacts-selectors';

export default function App() {
  const contacts = useSelector(getContact);
  const dispatch = useDispatch();

  const handleSubmit = ({ name, number }) => {
    if (
      contacts.find(
        contact =>
          contact.name.toLocaleLowerCase() === name.toLocaleLowerCase() ||
          contact.number === number,
      )
    ) {
      return alert(`${name} is added`);
    }
    dispatch(actions.addContact(name, number));
  };

  return (
    <Container>
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <Form onSubmit={handleSubmit} />
      <ContactTitle>Contacts</ContactTitle>
      <Filter></Filter>
      <ContactsList></ContactsList>
    </Container>
  );
}
