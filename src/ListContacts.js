import React from 'react';
import PropTypes from 'prop-types';

const ListContacts = (props) => (
  <ol className="contact-list">
    {props.contacts.map((contact, key) => (
      <li className="contact-list-item" key={contact.id}>
        <div className="contact-avatar" style={{
          backgroundImage: `url(${contact.avatarURL})`
        }} />
        <div className="contact-details">
          <p>{contact.name}</p>
          <p>{contact.email}</p>
        </div>
        <button onClick={() => props.onDeleteContact(contact)} className="contact-remove">
          Remove
        </button>
      </li>
    ))}
  </ol>
);

ListContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired
}

export default ListContacts
