import React, { useState } from "react";

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;

  function handleChange(e) {
    setFormState({...formState, [e.target.name]: e.target.value })
  }

  return (
    <section>
      <h1>Contact me</h1>
      <form id="contact-form">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            defaultValue={name}
            name="name"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" defaultValue={email} name="email" onChange={handleChange}/>
        </div>
        <div>
          <textarea name="message" defaultValue={message} rows="5" onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
