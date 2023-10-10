import { ContactListItem } from '../ContactListItem/ContactListItem';

export const ContactList = ({ contacts, onDelete }) => {
  console.log(contacts);
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Number</th>
          <th>Delet</th>
        </tr>
      </thead>

      <tbody>
        {contacts.map(contact => (
          <tr key={contact.id}>
            <td>{contact.name}</td>
            <td>{contact.number}</td>
            <td>
              <button onClick={() => onDelete(contact.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
