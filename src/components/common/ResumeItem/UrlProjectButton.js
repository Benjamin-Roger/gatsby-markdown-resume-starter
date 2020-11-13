import React from 'react';

export const UrlProjectButton = ({ url_project, name }) => (
    <p className="text-right position-absolute" style={{ bottom: 0, right: 0 }}>
      <a
        className="site-link btn btn-primary border-0"
        href={url_project}
        title={name}
        alt={name}
        rel="nofollow"
      >
        {url_project.match(`github.com`)
          ? `See the project on Github`
          : `See the website`}
        <i
          className={
            `ml-2 ` +
            (url_project.match(`github.com`) ? `fab fa-git-alt` : `fa fa-globe`)
          }
        ></i>
      </a>
    </p>
  );

  export default UrlProjectButton