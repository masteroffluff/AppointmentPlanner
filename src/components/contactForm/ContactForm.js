import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  const handleChangeName=({target})=>{
    setName(target.value)
  }
  const handleChangeEmail=({target})=>{
    setEmail(target.value)
  }
  const handleChangePhone=({target})=>{
    setPhone(target.value)
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input name="name" type="text" value={name} onChange={handleChangeName} /> 
      <input name="email" type="email" value={email} onChange={handleChangeEmail} /> 
      <input name="phone" type="phone" value={phone} onChange={handleChangePhone} pattern="0\d{10}"/>  
      <input name="submit" type="submit" />
    </form>
    
    </>
  );
};

/* 
ContactForm Requirements:

    Render a form with:
        The onSubmit attribute set
        3 controlled <input> elements, one for each piece of contact data
        A submit button
    Include a pattern attribute to the phone <input> with a regex that matches the phone locale of your preference

*/