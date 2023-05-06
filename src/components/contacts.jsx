import PropTypes from 'prop-types';
import style from './styles.module.css';
export function ContactList({ contacts, deleteContact }) {
  if (contacts.length === 0) {
    return <p>there is no such contact</p>;
  }
  return (
    <ul className={style.contact}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={style.contactItem}>
          <p>
            {name}: {number}
          </p>
          <button
            className={style.subButton}
            type="button"
            onClick={() => deleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  deleteContact: PropTypes.func.isRequired,
};
