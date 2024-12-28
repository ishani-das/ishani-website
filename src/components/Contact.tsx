// import React, { useRef, useState } from 'react';
// import '../assets/styles/Contact.scss';
// // import emailjs from '@emailjs/browser';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import SendIcon from '@mui/icons-material/Send';
// import TextField from '@mui/material/TextField';

// function Contact() {

//   const [name, setName] = useState<string>('');
//   const [email, setEmail] = useState<string>('');
//   const [message, setMessage] = useState<string>('');

//   const [nameError, setNameError] = useState<boolean>(false);
//   const [emailError, setEmailError] = useState<boolean>(false);
//   const [messageError, setMessageError] = useState<boolean>(false);

//   const form = useRef();

//   const sendEmail = (e: any) => {
//     e.preventDefault();

//     setNameError(name === '');
//     setEmailError(email === '');
//     setMessageError(message === '');

//     /* Uncomment below if you want to enable the emailJS */

//     // if (name !== '' && email !== '' && message !== '') {
//     //   var templateParams = {
//     //     name: name,
//     //     email: email,
//     //     message: message
//     //   };

//     //   console.log(templateParams);
//     //   emailjs.send('service_id', 'template_id', templateParams, 'api_key').then(
//     //     (response) => {
//     //       console.log('SUCCESS!', response.status, response.text);
//     //     },
//     //     (error) => {
//     //       console.log('FAILED...', error);
//     //     },
//     //   );
//     //   setName('');
//     //   setEmail('');
//     //   setMessage('');
//     // }
//   };

//   return (
//     <div id="contact">
//       <div className="items-container">
//         <div className="contact_wrapper">
//           <h1>Contact Me</h1>
//           <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
//           <Box
//             ref={form}
//             component="form"
//             noValidate
//             autoComplete="off"
//             className='contact-form'
//           >
//             <div className='form-flex'>
//               <TextField
//                 required
//                 id="outlined-required"
//                 label="Your Name"
//                 placeholder="What's your name?"
//                 value={name}
//                 onChange={(e) => {
//                   setName(e.target.value);
//                 }}
//                 error={nameError}
//                 helperText={nameError ? "Please enter your name" : ""}
//               />
//               <TextField
//                 required
//                 id="outlined-required"
//                 label="Email / Phone"
//                 placeholder="How can I reach you?"
//                 value={email}
//                 onChange={(e) => {
//                   setEmail(e.target.value);
//                 }}
//                 error={emailError}
//                 helperText={emailError ? "Please enter your email or phone number" : ""}
//               />
//             </div>
//             <TextField
//               required
//               id="outlined-multiline-static"
//               label="Message"
//               placeholder="Send me any inquiries or questions"
//               multiline
//               rows={10}
//               className="body-form"
//               value={message}
//               onChange={(e) => {
//                 setMessage(e.target.value);
//               }}
//               error={messageError}
//               helperText={messageError ? "Please enter the message" : ""}
//             />
//             <Button variant="contained" endIcon={<SendIcon />} onClick={sendEmail}>
//               Send
//             </Button>
//           </Box>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contact;



import React from 'react';
import '../assets/styles/Contact.scss';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

function Contact() {
  const email = "ishanid@umich.edu"; // Replace with your email
  const subject = "";
  const body = "";

  // ----------
  const buttonStyle = {
    backgroundImage: 'url(../assets/images/aura.png)',  // Replace with your image URL
    backgroundSize: 'cover',  // Ensures the image covers the button
    backgroundPosition: 'center',  // Centers the image
    border: 'none',  // Removes the default button border
    padding: '10px 20px',  // Adds some padding inside the button
    color: 'white',  // Sets text color
    fontSize: '16px',  // Font size
    cursor: 'pointer',  // Changes the cursor to pointer
  };

  // ----------

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Click on the button below to send me an email!</p>
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
            sx={{
              backgroundColor: '#5000ca', // Custom background color
            }}

          >
            Send Email
          </Button> 
           
        </div>
      </div>
    </div>
  );
}

export default Contact;
