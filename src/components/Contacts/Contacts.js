import { useEffect } from 'react';
import s from './Contacts.module.css';
import * as operations from '../../redux/operations';
import { useSelector, useDispatch } from 'react-redux';
import { getAllContacts, getFilterValue } from '../../redux/contacts-selectors';

function Contacts() {
  const filteredContacts = useSelector(state =>
    getAllContacts(state).filter(contact =>
      contact.name.toLowerCase().includes(getFilterValue(state).toLowerCase()),
    ),
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchContact());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ul className={s.contactsList}>
      {filteredContacts.map(el => {
        return (
          <li className={s.contactsListItem} key={el.id}>
            {el.name}: {el.number}{' '}
            <button
              className={s.deleteContact}
              onClick={() => dispatch(operations.deleteContact(el.id))}
            >
              Удалить
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default Contacts;
