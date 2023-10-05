import React from "react";

export const ContactPicker = ({contacts,callback,value,name}) => {
  return (
    <>
    <select onChange={callback} name={name} value={value}>
      <option value="" aria-label="No Contact" key="-1">No Contact</option>
      {contacts.map((contact)=><option value={contact.name} key={contact.name} >{contact.name}</option>)}
      
    </select>
    
    </>
  );
};
