import React, { useState } from 'react';

const NetlifyForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        'form-name': form.getAttribute('name'),
        name,
        email,
        message
      }).toString()
    })
      .then(() => alert('Form successfully submitted'))
      .catch((error) => alert(error));
  };

  return (
    <form name="contact" method="post" netlify-honeypot="bot-field" data-netlify="true" onSubmit={handleSubmit}>
    <input type="hidden" name="form-name" value="contact" />
    <div className="flex flex-col gap-8">

        <h3 className="text-slate-100 text-left ml-4">Contact Me:</h3>
        <p className="hidden">
          <label>
            Don’t fill this out if you’re human:{" "}
            <input name="bot-field" />
          </label>
        </p>
        <label  className="input input-bordered flex items-center gap-2">
          Name
          <input
            type="text"
            name="name"
            className="grow"
            placeholder="Daisy"
            value={name}
          onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Email
          <input
            type="email"
            name="message"
            className="grow mb-6"
            placeholder="daisy@site.com"
            value={email}
          onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <textarea
          className="textarea textarea-bordered gap-2"
          maxLength={500}
          name="message"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <div className="flex grow justify-end">
          <button className="text-slate-100 type=submit">Submit</button>
        </div>
    </div>
    </form>
      );
    };
    
    export default NetlifyForm;