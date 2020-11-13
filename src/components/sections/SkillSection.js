import React from 'react';

import LineChart from 'components/common/LineChart';

import config from 'config';

const SkillSection = () => (
  <section
    className="resume-section p-3 p-lg-5 d-flex align-items-center"
    id="skills"
  >
    <div className="w-100">
      <h2 className="mb-5">Skills</h2>

      <h3 className="subheading mb-3">Business skills</h3>

      {config.businessSkills.map((skill, key) => (
        <LineChart
          key={key}
          title={skill.name}
          percentage={skill.percentage}
          className="business-skills"
        />
      ))}

      <h3 className="subheading mt-4 mb-3">Sector skills</h3>

      {config.sectorSkills.map((skill, key) => (
        <LineChart
          key={key}
          title={skill.name}
          percentage={skill.percentage}
          className="sector-skills"
        />
      ))}

      <h3 className="subheading mt-4 mb-3">Technical skills</h3>

      <div className="dev-icons">
        {config.technicalSkills.map((skill, key) => (
          <LineChart
            key={key}
            title={
              <>
                <i className={`fab ${skill.iconClass}`}></i> {skill.name}
              </>
            }
            percentage={skill.percentage}
            className="technical-skills"
          />
        ))}
      </div>

      <p className="mt-4">I mostly work with these technologies:</p>
      <ul>
        {config.toolsFrameworks.map((tool, key) => (
          <li key={key}>
            <strong>{tool.category} :</strong>{' '}
            {tool.technologies.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default SkillSection;
