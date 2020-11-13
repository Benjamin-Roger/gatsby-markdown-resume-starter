import React from 'react';

import config from 'config';

const CertificationSection = () => (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="certifications"
      style={{ minHeight: '50vh' }}
    >
      <div className="w-100">
        <h2 className="mb-5">Certifications</h2>
        <ul className="fa-ul mb-0 d-flex flex-wrap">
          {config.certifications.map((certification, key) => {
            return (
              <li key={key} className="p-2 pr-4 col-12 col-sm-6">
                <a
                  href={certification.url}
                  rel="nofollow"
                  title={certification.name}
                >
                  <i className="fa-li fa fa-award text-warning"></i>
                  {certification.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );

  export default CertificationSection;