import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { FilterBar } from './FilterBar/FilterBar';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...newContact, id: nanoid() }],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = filterValue => {
    this.setState({
      filter: filterValue,
    });
  };

  render() {
    const visibleContact = this.state.contacts.filter(contact => {
      if (this.state.filter === '') {
        return this.state.contact
          .toLowerCase()
          .includes(this.state.filter.toLowerCase());
      }
    });
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAdd={this.addContact} />

        <h2>Contacts</h2>
        <FilterBar
          filter={this.state.filter}
          onChangeFilter={this.changeFilter}
        />
        <ContactList contacts={visibleContact} onDelete={this.deleteContact} />
      </div>
    );
  }
}
