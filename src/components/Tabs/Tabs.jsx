import React, { useState } from 'react';
import '../../index.css';
import WorkTab from '../Experience';
import EducationTab from '../Education';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('work');

  return (
    <div className="tabs-wrapper"> {/* Add a wrapper around the Tabs component */}
    {/* Tabs container */}
      <div className=""> 
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

        <div className={`tab-content ${activeTab ? 'tab-content-border' : ''}`}>
          {activeTab === 'work' && <WorkTab />}
          {activeTab === 'education' && <EducationTab />}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
