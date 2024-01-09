import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';

const Social = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end',position:'absolute',bottom:0,right:0,margin:'3em' }}>
      <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={30} style={{ margin: '5px' } }/>
      </a>
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
        <FaTwitter size={30} style={{ margin: '5px' }} />
      </a>
      <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
        <FaGithub size={30} style={{ margin: '5px' }} />
      </a>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={30} style={{ margin: '5px' }} />
      </a>
    </div>
  );
};

export default Social;
