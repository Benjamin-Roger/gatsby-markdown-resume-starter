import React from 'react';

import ResumeItem from 'components/common/ResumeItem/ResumeItem';

const EducationSection = ({ education }) => (
  <section
    className="resume-section p-3 p-lg-5 d-flex align-items-center"
    id="education"
  >
    <div className="w-100">
      <h2 className="mb-5">Education</h2>
      <div className="pl-3 pl-lg-5 resume-item-wrapper timeline">
        <div className="align-fix"></div>
        {education.map((item, key) => (
          <ResumeItem key={"education-"+key} {...item.node.frontmatter}>
            <div dangerouslySetInnerHTML={{ __html: item.node.html }} />
          </ResumeItem>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
