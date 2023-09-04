import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import css from '../css/App.module.css';

export default App;

function App() {
  return (
    <div className={css.app}>
      <h1>Phonebook</h1>
      <ContactForm />
      <section className={css.contacts}>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </section>
    </div>
  );
}
