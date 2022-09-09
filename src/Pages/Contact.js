import React,{useRef} from 'react'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import emailjs from 'emailjs-com';
import '../styles/contact.css'

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6ufypff', 'template_v5egt98', form.current, 'Eu-XJz1TJgjxOYMGc')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className="contact">
      <Navigation />
      <section className="contact__section">
        <form ref={form} className={'contact-form'} onSubmit={sendEmail}>
          
          <input type="text" name="user_name" className='form__input-s' placeholder='Your name'/>
          
          <input type="email" name="user_email" className='form__input-s' placeholder='Your email'/>
          
          <textarea name="message" className='form__input-l' placeholder='Your message'/>
          <input type="submit" value="<Send />"  className='form__input-b'/>
        </form>
      </section>
        <Footer />
    </div>
  )
}

export default Contact