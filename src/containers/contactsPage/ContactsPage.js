import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ callback, contacts }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  current name, phone, and email
  */
  const [currentName,setCurrentName]= useState('')
  const [phone,setPhone]= useState('')
  const [email,setEmail]= useState('')
  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  const [nameOK, setNameOK] = useState(false)
  useEffect(()=>{
    if (currentName===''){setNameOK(false)}
    const nameCheckBoolean=contacts.map((contact)=>contact.name).includes(currentName)===false
    setNameOK (nameCheckBoolean)
   
  } ,[currentName])

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   if (nameOK){
    if(currentName&&email&&phone)
    callback(currentName,phone,email)
    setCurrentName('')
    setPhone('')
    setEmail('')
   }
  };



  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm 
          name={currentName}
          setName={setCurrentName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList list={contacts} />
      </section>
    </div>
  );
};

