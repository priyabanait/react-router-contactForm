import React ,{useRef}from 'react'
import classes from './ContactUs.module.css'
export default function ContactUs(props) {

    const nameRef = useRef('');
    const emailTextRef = useRef('');
    const phoneRef = useRef('');
  
    function submitHandler(event) {
      event.preventDefault();
  
      // could add validation here...
  
      const contact = {
        Username: nameRef.current.value,
        Email: emailTextRef.current.value,
        Phone: phoneRef.current.value,
      };
  
      props.contactHandler(contact);
    }
  return (
    <section className={classes.input}>

    <form onSubmit={submitHandler}>
      <label htmlFor='name'>Username:</label>
      <input type='text' id='name' name='name' ref={nameRef}></input>
      <label htmlFor='age'>Email:</label>
      <input type='text' id='email' name='age' ref={emailTextRef}></input>
      <label htmlFor='college'>Phone:</label>
      <input type='text' id='phone' name='college' ref={phoneRef}></input>
      <button className={classes.button} type='submit'>Submit</button>
    </form>
  
  </section>
  )
}
