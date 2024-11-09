import React, { useState } from 'react';
import '../../index.css';
import WorkTab from './ExperienceTab';
import EducationTab from './EducationTab';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('work');

  return (
    <div className="tabs-wrapper">
      <div className="tab-buttons">
        <button
          className={activeTab === 'work' ? 'active' : ''}
          onClick={() => setActiveTab('work')}
        >
          Work
        </button>
        <button
          className={activeTab === 'education' ? 'active' : ''}
          onClick={() => setActiveTab('education')}
        >
          Education
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'work' && <WorkTab />}
        {activeTab === 'education' && <EducationTab />}
      </div>
    </div>
  );
};

export default Tabs;
