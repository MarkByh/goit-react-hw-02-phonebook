import React, { Component } from 'react';
import style from './styles.module.css';
import { nanoid } from 'nanoid';
export default class Form extends Component {
  state = {
    name: '',
    number: '',
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.newContact({
      name: this.state.name,
      number: this.state.number,
      id: nanoid(6),
    });
    this.resetForm();
  };
  resetForm = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit} className={style.form}>
          <div>
            <h2>Name</h2>
            <input
              className={style.formInput}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
              value={this.state.name}
            />
          </div>

          <div>
            <h2>Number</h2>
            <input
              className={style.formInput}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleChange}
              value={this.state.number}
            />
          </div>
          <button className={style.subButton} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}
