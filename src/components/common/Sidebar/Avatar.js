import React from 'react';
import avatar from 'assets/images/cv_picture.jpg';

const Avatar = () => (
  <a className="navbar-brand d-none d-lg-block w-100 flex-1" href="#page-top">
    <div
      className="overflow-hidden mx-auto rounded-circle"
      style={{
        width: '10rem',
        height: '10rem',
        border: '3px solid #fff',
      }}
    >
      <img className="img-responsive fit-image" src={avatar} alt="" />
    </div>
  </a>
);
export default Avatar;
