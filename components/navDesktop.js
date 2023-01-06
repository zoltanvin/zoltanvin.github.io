import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ToggleTheme from './toggleTheme';
import styles from '../styles/NavDesktop.module.css';
import { useRouter } from 'next/router';

export default function NavDesktop() {
  const router = useRouter();

  return (
    <>
      <span>
        <li
          className={`mr-3 hover:opacity-20 transition-all cursor-pointer ${styles.my_li}`}
        >
          <a href='mailto:zoltanvin@protonmail.com '>Contact</a>
        </li>
      </span>

      <li className='mr-3 hidden md:block'>|</li>
      <li className='mr-4 hover:opacity-20 transition-all cursor-pointer'>
        <a href={'https://linkedin.com/in/zoltanvin'} target='_blank' rel='noopener'>
          <FaLinkedin />
        </a>
      </li>

      <li className='mr-4 hover:opacity-20 transition-all cursor-pointer'>
        <a href={'https://github.com/zoltanvin'} target='_blank' rel='noopener'>
          <FaGithub />
        </a>
      </li>

      <li>
        <ToggleTheme />
      </li>
    </>
  );
}
