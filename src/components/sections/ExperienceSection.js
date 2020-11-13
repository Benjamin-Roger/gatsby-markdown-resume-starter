import React from 'react';

import ResumeItem from 'components/common/ResumeItem/ResumeItem';

const ExperienceSection = ({ experiences }) => (
  <section
    className="resume-section p-3 p-lg-5 d-flex justify-content-center"
    id="experience"
  >
    <div className="w-100">
      <h2 className="mb-5">Experiences</h2>

      <div className="pl-3 pl-lg-5 resume-item-wrapper timeline">
        <div className="align-fix"></div>
        {experiences.map((experience, key) => (
          <ResumeItem
            key={'experience-' + key}
            {...experience.node.frontmatter}
          >
            <div dangerouslySetInnerHTML={{ __html: experience.node.html }} />
          </ResumeItem>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
