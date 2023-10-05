import React from "react";

export const ContactPicker = ({contacts,callback,value,name}) => {
  return (
    <>
    <select onChange={callback} name={name} value={value}>
      <option value="">No Contact</option>
      {contacts.map((contact)=><option value={contact.name}>{contact.name}</option>)}
      
    </select>
    
    </>
  );
};
