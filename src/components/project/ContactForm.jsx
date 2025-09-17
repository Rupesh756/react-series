import React, { useState } from 'react'

const ContactForm = () => {
    // const [username,setusername]=useState("");
    // const [email,setemail]=useState("");
    // const [message,setmessage]=useState("");

    const [contact, setcontact]= useState({
        username:"",
        email:"",
        message:""
    });

    const handleFormSubmit=(e)=>{
        e.preventDefault();
        // const contactData={
        //     username,
        //     email,
        //     message,
        // };
        console.log(contact);
    }

     const handleInputChange =(e)=>{
        const {name, value}=e.target;
        setcontact((prev)=>({
            ...prev,[name]:value,
        }))
     }
  return (
    <div>
        <div className='bg-sky-500'>
            <h1>Contact Form</h1>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="username"> Username</label>
                <input 
                type="text"
                 name='username'
                  required autoComplete='off' 
                  value={contact.username}
                  onChange={handleInputChange}
                //   onChange={(e)=>setusername(e.target.value)}
                  />

                <label htmlFor="email">E-mail</label>
                <input type="text" 
                name='email' 
                required autoComplete='off'  
                value={contact.email}
                onChange={handleInputChange}
                // onChange={(e)=>setemail(e.target.value)}
                />

                <label htmlFor="message"> Message</label>
                <textarea 
                type="text" 
                name='message'
                 required autoComplete='off' 
                 rows="6"
                 value={contact.message }
                onChange={handleInputChange}
                //  onChange={(e)=>setmessage(e.target.value)}
                 />

                <button type='submit'> Send Message</button>
                
            </form>
        </div>
    </div>
  )
}

export default ContactForm
