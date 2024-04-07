import React, { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
const Contact = () => {
  const notifySubmit = () => toast('James will contact you soon.',{icon:'✅',style:{background:'#90EE90'}});
  // State to manage form field values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  // Function to handle form field value changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('https://personalportfolio-jnbv.onrender.com/send-email', formData)
      .then((response) => {
        console.log('Success:', response.data);
        notifySubmit()
        // Reset form fields after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
        });
      })
      .catch((error) => {
        console.error('Error', error);
      });
  };

  return (
    <div className='mt-14 flex justify-center'>
      <div className='bg-white h-[40em] w-[23em] rounded-xl shadow-xl flex justify-center items-center sm:w-[40em]'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-10'>
          <p className='font-Roboto'>If you made it this far, we can go further.</p>
          <input
            className='border-b'
            placeholder='Name'
            name='name'
            type='text'
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            className='border-b'
            placeholder='Email'
            name='email'
            type='email'
            required
            value={formData.email}
            onChange={handleChange}
          />
          <input
            className='border-b'
            maxLength={10}
            placeholder='Phone'
            name='phone'
            type='text'
            required
            value={formData.phone}
            onChange={handleChange}
          />
          <button type='submit' className='border-2 border-black rounded-lg bg-[#2c5d63c3] hover:bg-[#3d7177b1]'>
            Contact
          </button>
            <Toaster position="top-center" reverseOrder={false}
              toastOptions={{
                // Default options for specific types
                success: {
                  duration: 4000,
                  theme: {
                    primary: 'green',
                    secondary: 'black',
                  },
                },
              }}
              />
        </form>
      </div>
    </div>
  );
};

export default Contact;
