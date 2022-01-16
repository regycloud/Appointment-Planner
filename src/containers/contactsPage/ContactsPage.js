import React, { useEffect, useState} from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

/*
Define state variables for 
contact info and duplicate check
*/
export const ContactsPage = ({contacts, addContact}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicate, setDuplicate] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!duplicate) {
      addContact(name, phone, email);
      setName("");
      setPhone("");
      setEmail("");
    }
  };
  
  useEffect(() => {
    const nameIsDuplicate = () => {
      const found = contacts.find((contact) => contact.name === name);
      if (found !== undefined) {
        return true;
      }
      return false;
    }
    
    if (nameIsDuplicate()) {
      setDuplicate(true);
    } else {
      setDuplicate(false)
    }
  }, [name, contacts, duplicate]);
 
 /*
 Add contact info and clear data
 if the contact name is not a duplicate
 */

/*
Using hooks, check for contact name in the 
contacts array variable in props
*/

return (
  <div>
      <section>
        <h2>Add Contact
          {duplicate ? " - Name Already Exist": ""}</h2> 
      </section>
      <ContactForm
        name={name}
        setName={setName}
        phone={phone}
        setPhone={setPhone}
        email={email}
        setEmail={setEmail}
        handleSubmit={handleSubmit}
      />
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts}
        />
      </section>
    </div>
  );
};
