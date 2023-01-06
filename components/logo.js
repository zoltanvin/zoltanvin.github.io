import Link from 'next/link';
import styles from '../styles/Logo.module.css';

export default function Logo() {
  return (
    <div>
        <div
          className={`dark:text-white text-3xl hover:opacity-70 ${styles.logo}`}
        >
          Zoltan Vincze
        </div>
    </div>
  );
}
