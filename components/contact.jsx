'use client';
import React, { useState } from 'react';

import images from '../utils/images';
import { client, urlFor } from '../sanity/client';
import Image from 'next/image';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='min-h-[80vh] mx-auto max-w-7xl flex flex-col justify-center items-center' id='contact'>
      <h2 className="md:text-[2.75rem] font-extrabold text-white text-center uppercase text-[2rem] mb-10">Chat with <span className='text-light-blue'>me</span></h2>

      <div className="w-[60%] flex justify-evenly items-center flex-wrap mt-4 mb-2 my-2">
        <div className="min-w-[290px] flex flex-row justify-start items-center mx-1 my-0 p-2 rounded-[10px] cursor-pointer bg-slate-700 transition-all duration-300 ease-in-out ">
          <Image src={images.email} alt="email" className='w-[40px] h-[40px] mx-1 my-[0.7rem] '/>
          <a href="mailto:chiragbhatnagar465@gmail.com" className="p-text font-bold truncate">chiragbhatnagar465@gmail.com</a>
        </div>
        <div className="min-w-[290px] flex flex-row justify-start items-center mx-1 my-0 p-2 rounded-[10px] cursor-pointer bg-slate-700 transition-all duration-300 ease-in-out">
          <Image src={images.mobile} alt="phone" className='w-[40px] h-[40px] mx-1 my-[0.7rem]'/>
          <a href="tel:+91-9873189927" className="p-text font-bold">+91-9873189927</a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="w-[60%] flex-col mx-1 my-2 flex justify-center items-center">
          <div className="w-full mb-2 cursor-pointer flex justify-center items-center transition-all duration-300 ease-in-out text-black ">
            <input className="p-text w-full p-[0.95rem] rounded-[7px] test-black" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="w-full mx-[0.75rem] mb-2 my-0 cursor-pointer flex justify-center items-center transition-all duration-300 ease-in-out text-black">
            <input className="p-text w-full p-[0.95rem] rounded-[7px]" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div className='w-full mx-[0.75rem] mb-2 my-0 cursor-pointer flex justify-center items-center transition-all duration-300 ease-in-out text-black mb-5'>
            <textarea
              className="p-text w-full p-[0.95rem] rounded-[7px] hover:shadow-blue-700 text-black"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text px-1 py-2 rounded-[10px] font-bold m-[2rem 0 0 0] bg-light-blue hover:bg-blue-900" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
      ) : (
        <div>
          <h3 className="md:text-[2.75rem] font-extrabold text-white text-center uppercase text-[2rem]">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </div>
  );
};

export default Contact;