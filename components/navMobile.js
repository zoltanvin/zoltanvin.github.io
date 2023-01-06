import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ToggleTheme from './toggleTheme';

export default function NavMobile({ toggleModal, hamburgerOpen }) {
  return (
    <>
      <li
        className='mb-8 text-4xl hover:opacity-20 transition-all cursor-pointer'
        onClick={() => {
          toggleModal();
          hamburgerOpen(false);
        }}
      >
        <Link href={'/'} as={'/'}>
          Home
        </Link>
      </li>
      <li className='mb-10 text-4xl hover:opacity-20 transition-all cursor-pointer'>
        <a href='mailto:zoltanvin@protonmail.com'>Contact</a>
      </li>

      <li className='flex items-center text-2xl'>
        <a
          href={'https://linkedin.com/in/zoltanvin'}
          target='_blank'
          rel='noopener'
          className='mr-5 hover:opacity-20 transition-all cursor-pointer'
          onClick={() => {
            toggleModal();
            hamburgerOpen(false);
          }}
        >
          <FaLinkedin />
        </a>
          <li className='flex items-center text-2xl'>
          <a
           href={'https://github.com/zoltanvin'}
           target='_blank'
           rel='noopener'
           className='mr-5 hover:opacity-20 transition-all cursor-pointer'
            onClick={() => {
              toggleModal();
              hamburgerOpen(false);
            }}
          >
            <FaGithub />
          </a>
          <ToggleTheme />
        </li>
      </li>


    </>
  );
}
