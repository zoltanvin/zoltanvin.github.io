import React from 'react';
import Logo from '../components/logo';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Footer() {
  return (
    <footer
      className={`bg-gray-100 py-10 dark:bg-gray-800 dark:text-white`}
    >
      <div
        className={`mx-5 md:mx-20 lg:mx-32 flex flex-col content-center items-center`}
      >
        <Logo />
        <div className='flex mt-4'>
          <a href='mailto:zoltanvin@protonmail.com' className='text-lg mr-5'>
            <MdEmail />
          </a>

          <a
            href={'https://linkedin.com/in/zoltanvin'}
            target='_blank'
            rel='noopener'
            className='text-lg mr-5'>
            <FaLinkedin />
          </a>

          <a
            href={'https://github.com/zoltanvin'}
            target='_blank'
            rel='noopener'
            className='text-lg '
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}
