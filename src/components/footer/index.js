import React from 'react';


const Footer = () => {
  return (
    <footer className='flex flex-col w-full  justify-center mb-10'>
      <div className='mx-auto w-fit'>
       

        <div className='flex justify-center space-x-5'>
          <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
            <img src='https://img.icons8.com/fluent/30/000000/facebook-new.png' alt='Facebook' />
          </a>
          <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer'>
            <img src='https://img.icons8.com/fluent/30/000000/linkedin-2.png' alt='LinkedIn' />
          </a>
          <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
            <img src='https://img.icons8.com/fluent/30/000000/instagram-new.png' alt='Instagram' />
          </a>
          <a href='https://messenger.com' target='_blank' rel='noopener noreferrer'>
            <img src='https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png' alt='Messenger' />
          </a>
          <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
            <img src='https://img.icons8.com/fluent/30/000000/twitter.png' alt='Twitter' />
          </a>
        </div>

        <p className='text-center text-gray-700 font-medium'>&copy; 2022 Company Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
