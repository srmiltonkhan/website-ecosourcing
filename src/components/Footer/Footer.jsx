import React, { useContext } from 'react';
import RootContext from '../../context/RootContext';
import './Footer.css';

const Footer = () => {
  const { year } = useContext(RootContext);

  return (
    <div className="footer-container py-2 footer-bg">
      <div className="text-center text-muted px-1">
        <small style={{ fontSize: '12px', }} className='text-white'>
          COPYRIGHT &copy; 2015 - {year} ECO Sourcing Ltd.
        </small>
      </div>
    </div>
  );
};

export default Footer;
