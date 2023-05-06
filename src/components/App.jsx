import React, { Component } from 'react';
import { ContactList } from './contacts';
import { Filter } from './filter';
import Form from './contactForm';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  newContact = data => {
    const usedName = this.state.contacts.find(
      el => el.name.toLowerCase() === data.name.toLowerCase()
    );

    if (usedName) return alert(usedName.name + '  is already in contacts.');
    console.log(data);
    this.setState(({ contacts }) => ({
      contacts: [data, ...contacts],
    }));
  };
  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contacts => contacts.id !== id),
    }));
  };
  getContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          marginLeft: '100px',

          fontSize: 40,
          color: '#010101',
        }}
      >
        <Form newContact={this.newContact}></Form>
        <h2 style={{ fontSize: '50px', fontWeight: 'bold', marginTop: '20px' }}>
          Contacts
        </h2>
        {this.state.contacts.length > 0 ? (
          <>
            <Filter
              value={this.state.filter}
              onChange={this.handleChange}
            ></Filter>
            <ContactList
              deleteContact={this.deleteContact}
              contacts={this.getContacts()}
            ></ContactList>
          </>
        ) : (
          'You have no contacts'
        )}
      </div>
    );
  }
}
