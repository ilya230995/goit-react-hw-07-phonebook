import { useState } from 'react';
import * as operations from '../../redux/operations';
import s from './Phonebook.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getAllContacts } from '../../redux/contacts-selectors';

function Phonebook() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const allContacts = useSelector(state => getAllContacts(state));
  const dispatch = useDispatch();

  const existContact = number => {
    return allContacts.find(contact => contact.number.toLowerCase() === number.toLowerCase());
  };

  const handleOnSubmit = e => {
    e.preventDefault();

    if (existContact(number)) {
      alert(`Already in contacts ${name}`);
      return;
    }

    dispatch(operations.addContact({ name, number }));

    setName('');
    setNumber('');
  };

  const handleChange = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'number':
        setNumber(e.currentTarget.value);
        break;
      default:
        return;
    }
  };

  return (
    <form className={s.phoneBookForm} onSubmit={handleOnSubmit}>
      <label className={s.phoneBookLabel}>
        Name{' '}
        <input
          type="text"
          value={name}
          onChange={handleChange}
          name="name"
          className={s.phoneBookInput}
        />
      </label>
      <label className={s.phoneBookLabel}>
        Number{' '}
        <input
          type="text"
          value={number}
          onChange={handleChange}
          name="number"
          className={s.phoneBookInput}
        />
      </label>
      <button className={s.submitPhonebook} type="submit">
        Add Contact
      </button>
    </form>
  );
}
export default Phonebook;
