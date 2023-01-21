import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7q4mdwh', 'template_33ltz7q', form.current, 'oT_jbbBt3bNxDyNXx')
    e.target.reset();
      // .then((result) => {
      //     alert(result.text);
      // }, (error) => {
      //     alert(error.text);
      // });
  };
  return (
    <section>

      <div >
        <div className='text-center mt-14'>
          <h2 className='text-md text-gray-400 mb-2 '>Get In Touch</h2>
          <h2 className='text-[#4db5ff] text-3xl'>Contact Me</h2>
        </div>
        <div className='flex mt-10'>
          <div className='w-[80%] md:w-[50%] mx-auto'>
          <form ref={form} onSubmit={sendEmail} >
            <input name='name' type="text" placeholder='Your Full Name' className='px-5 sm:px-10 py-3 sm:py-6 placeholder:text-gray-500 bg-transparent border border-solid border-[#4db5ff] w-full rounded-xl outline-none ' />
            <input name='email' type="text" placeholder='Your Email' className='sm:mt-6 mt-5 px-5 sm:px-10 py-3 sm:py-6 placeholder:text-gray-500 bg-transparent border border-solid border-[#4db5ff] w-full rounded-xl' />
            <textarea name='message' type="text" rows={4} placeholder='Your Message' className='sm:mt-6 mt-5 px-5 sm:px-10 py-3 sm:py-6 placeholder:text-gray-500 bg-transparent border border-solid border-[#4db5ff] w-full rounded-xl' />
            <button type='submit' className='bg-[#4db5ff] px-5 sm:px-10 py-3 sm:py-6 rounded-xl mt-6 text-[#151B8D] hover:bg-transparent hover:border hover:border-solid hover:border-[#4db5ff] hover:text-[#4db5ff]'>
                Send Message
            </button>
          </form>
          </div>
        </div>
        {/* <a href="mailto:techdipesh36@gmail.com">send Message</a>
        <a href="https://m.me/profile.php?id=100017930170031">send Message</a>
        <a href="https://web.whatsapp.com/send?phone=+9779807261495">send Message</a> */}
      </div>
    </section>
  )
}
