import React from "react";

export const ContactPicker = ({ name, onChange, contacts }) => {
  return (
    <select name={name} onChange={onChange}>
      <option value={""} key={-1} selected="selected">
      No Contact selected
      </option>
      {contacts.map((contact) => {
        return (
          <option value={contact} key={contact}>
            {contact}
          </option>
        );
      })}
    </select>
  );
};
