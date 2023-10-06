import React from 'react'
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';
import {Container, Wrapper, Title, Desc, ContactForm, ContactTitle, ContactInput, ContactInputMessage, ContactButton} from './ContactStyle';

const Contact = () => {

  const [open, setOpen] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [from_email, setFromEmail] = useState('');
  const [from_name, setFromName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    // Update form input state
    if (e.target.name === 'from_email') setFromEmail(e.target.value);
    if (e.target.name === 'from_name') setFromName(e.target.value);
    if (e.target.name === 'subject') setSubject(e.target.value);
    if (e.target.name === 'message') setMessage(e.target.value);
  
    // Check if all required fields are filled
    if (from_email && from_name && subject && message) {
      setIsButtonDisabled(false); // Enable the button
    } else {
      setIsButtonDisabled(true); // Disable the button
    }

  }
  const sendEmail = (e) => {
    e.preventDefault();

    const emailService = 'service_pcry7ih';
    const templateId = 'template_xn9n8qv';
    const userId = 'Aqyq3-CnefSh0v1xh';

    emailjs.sendForm(emailService, templateId, e.target, userId)
      .then((result) => {
        setOpen(true);
        e.target.reset();
      })
      .catch((error) => {
        console.error(error.text);
      });
  };

  return (
    <Container>
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
        <ContactForm onSubmit={sendEmail}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInput placeholder="Your Email" name="from_email" value={from_email} onChange={handleInputChange}/>
          <ContactInput placeholder="Your Name" name="from_name" value={from_name} onChange={handleInputChange}/>
          <ContactInput placeholder="Subject" name="subject"  value={subject} onChange={handleInputChange}/>
          <ContactInputMessage placeholder="Message" rows="4" name="message" value={message} onChange={handleInputChange}/>
          <ContactButton type="submit" disabled={isButtonDisabled}/>
        </ContactForm>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={()=>setOpen(false)}
          message="Email sent successfully!"
          severity="success"
        />
      </Wrapper>
    </Container>
  )
}

export default Contact