import React, { useEffect, useState } from "react";
import './ContactForm.css';

export default function ContactForm() {
  const [enteredData, setenteredData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
  });

  const [storedFormData, setStoredFormData] = useState([]);

  function SaveData(NewData) {
    setStoredFormData((prevData) => {
      return [...prevData, NewData];
    });
  }

  useEffect(() => {
    if (storedFormData.length > 0) {
      console.log(storedFormData);
    }
  }, [storedFormData]);

  function handleChange(event) {
    const { name, value } = event.target;
    //console.log(name,"+",value);
    setenteredData((prevdata) => ({
      ...prevdata,
      [name]: value,
    }));
  }

  function SubmitHandler(event) {
    event.preventDefault();

    const NewData = {
      name: enteredData.name,
      phone: enteredData.phone,
      email: enteredData.email,
      date: enteredData.date,
    };

    JSON.stringify(NewData);
    SaveData(NewData);
    
    setenteredData({
      name: "",
      phone: "",
      email: "",
      date: "",
    });
  }

  return (
    <div className="User-form">
      <form onSubmit={SubmitHandler}>
        <div className="form-controls">
          <div className="form-control">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={enteredData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-control">
            <label>Phone number</label>
            <input
              name="phone"
              type="number"
              value={enteredData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-control">
            <label>Email</label>
            <input
              name="email"
              type="email"
              value={enteredData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-control">
            <label>Date</label>
            <input
              name="date"
              type="date"
              value={enteredData.date}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-action">
          <button type="submit">SUBMIT</button>
        </div>
      </form>
    </div>
  );
}
