import React from "react";
import {ContactPicker} from '../contactPicker/ContactPicker'

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const handleChangeTitle =({target})=>{
    setTitle(target.value);
  }
  const handleChangeDate =({target})=>{
    setDate(target.value);
  }
  const handleChangeTime= ({target})=>{
    setTime(target.value);
  }
  const handleChangeContact= ({target})=>{
    setContact(target.value);
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input name="title" type="text" value={title}  onChange={handleChangeTitle}/>
      <input name="date" type="date" value={date} onChange={handleChangeDate} min={getTodayString()}/>
      <input name="time" type="time" value={time} onChange={handleChangeTime}/>
      <ContactPicker name="contact" contacts={contacts} callback={handleChangeContact} value={contact} />
      <input type="submit" value="Submit" />
    </form>
    
    </>
  );
};
