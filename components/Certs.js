import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../styles/certificate.module.css';

const certificates = [
  {
    name: 'Certificate 1',
    date: 'January 1, 2021',
    company: 'Company 1',
    image: '../public/certificate1.png',
  },
  {
    name: 'Certificate 2',
    date: 'February 1, 2021',
    company: 'Company 2',
    image: '/public/certificate2.png',
  },
  {
    name: 'Certificate 3',
    date: 'March 1, 2021',
    company: 'Company 3',
    image: '/public/certificate3.png',
  },
  {
    name: 'Certificate 4',
    date: 'April 1, 2021',
    company: 'Company 4',
    image: '/public/certificate4.png',
  },
];

const Certificates = () => {
  const [ref, inView] = useInView({
    threshold: 0,
  });

  return (
    <div className="certificates-container">
    <section className={`mt-28 lg:mt-4 mx-5 md:mx-20 lg:mx-32 pb-20`}>
      <h2 className={`dark:text-gray-100 text-5xl lg:text-7xl font-black`}>
        Certifications
      </h2>
    </section>
          {certificates.map((certificate) => (
        <div
          ref={ref}
          className={`certificate ${inView ? 'fade-in' : ''}`}
          key={certificate.name}
        >
          <img src={certificate.image} alt={certificate.name} />
          <div className="certificate-text">
            <h3>{certificate.name}</h3>
            <p>{certificate.date}</p>
            <p>{certificate.company}</p>
          </div>
        </div>
      ))}
    </div>
  );
};


export default Certificates;
