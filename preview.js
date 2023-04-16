
import { SendDataContext } from "./SendDataContext";
import React, { useContext } from 'react';

function Preview() {
  const { sendData } = useContext(SendDataContext);

  return (
    <div>
      <h2>Preview</h2>
      <p>First Name: {sendData.firstName}</p>
      <p>Last Name: {sendData.lastName}</p>
     
      <p>Job title: {sendData.jobtitle}</p>
      <p>PHONE: {sendData.phone}</p>
      <p>Email: {sendData.email}</p>
    </div>
  );
}

export default Preview;



