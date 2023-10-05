import React, { useState, useEffect } from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts]= useState([])
  const [appointments, setAppointments] = useState([])

  /*
  Implement functions to add data to
  contacts and appointments
  */
  const addContactsCallback=(name, phoneNumber, email)=>{
    
    const newContact = {name,phoneNumber,email}
    setContacts((prev)=>[newContact,...prev])
  }
  const addAppointmentCallback=(name, contact, date, time)=>{
    const newAppointment = {name, contact, date, time}
    setAppointments((prev)=>[newAppointment,...prev])
  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage callback={addContactsCallback} contacts={contacts} /> /* Add props to ContactsPage */ }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage callback={addAppointmentCallback} appointments={appointments} contacts={contacts} /> /* Add props to AppointmentsPage */ }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
