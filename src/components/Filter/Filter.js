import s from './Filter.module.css';
import * as actions from '../../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import { getFilterValue } from '../../redux/contacts-selectors';

function Filter() {
  const filterValue = useSelector(state => getFilterValue(state));
  const dispatch = useDispatch();
  return (
    <label className={s.filterPhoneboke}>
      <input
        type="text"
        value={filterValue}
        onChange={e => dispatch(actions.filterContacts(e.target.value))}
        name="filter"
        className={s.filterInput}
      />
    </label>
  );
}

export default Filter;
