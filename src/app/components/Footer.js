import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
  <section className='bg-[#488AB7] h-20 flex justify-center items-center text-white'>
    <Link href={'/about'}>About</Link>
  </section>
  )
};

export default Footer;
