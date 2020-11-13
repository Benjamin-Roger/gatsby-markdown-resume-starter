import React from 'react';
import config from 'config';


const SocialLinksContainer = () => (
  <ul className="d-flex justify-content-center social-icons m-0 p-0">
    {config.socialLinks.map((social, key) => (
      <li key={key} className="lg-mt-4">
        <a href={social.url}>
          <i className={`fab ${social.icon}`}></i>
        </a>
      </li>
    ))}
  </ul>
);

export default SocialLinksContainer;