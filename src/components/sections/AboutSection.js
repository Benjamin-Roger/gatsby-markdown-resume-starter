import React from 'react';
import ParticlesBackground from 'components/common/ParticlesBackground';

import config from 'config';

const AboutSection = ({ bio }) => (
  <>
    {/* About */}

    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="about"
    >
      <div className="w-100">
        <h1 className="mb-0">
          {config.firstName}
          <span className="text-primary"> {config.lastName}</span>
        </h1>
        <div className="subheading mb-5">
          <a href={`mailto:${config.email}`}>{config.email} · </a>
          <span className="d-block d-md-inline">{config.address} ·</span>{' '}
          <span className="d-block d-md-inline">{config.phone}</span>
        </div>
        <div className="lead" dangerouslySetInnerHTML={{ __html: bio }} />

        {/* Download resume */}
        <a
          className="mt-2 btn-grow btn border-0 btn-primary text-white p-3 d-block d-sm-inline-block position-relative"
          href={config.resumeDownload.url}
          title={config.resumeDownload.title}
          download
        >
          <i className="fa fa-download mr-2"> </i>
          {config.resumeDownload.title}
          <ParticlesBackground />
        </a>

        {/* See code on Github */}
        <a
          className="mt-2 ml-md-3 btn-grow btn text-white border-0 p-3 d-block d-sm-inline-block position-relative"
          style={{ backgroundColor: 'black' }}
          href={config.gitHubRepo.url}
          title={config.gitHubRepo.title}
        >
          <i className="fab fa-github mr-2"> </i>
          {config.gitHubRepo.title}
          <ParticlesBackground />
        </a>

      </div>
    </section>
  </>
);

export default AboutSection;
