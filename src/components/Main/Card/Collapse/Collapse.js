import React, { useState } from 'react';
import collapseIcon from '../../../../assets/arrow-back-ios.svg';
import '../Collapse/_collapse.scss';

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <button className="collapse-btn" onClick={toggleCollapse}>
        <img src={collapseIcon} className={`collapse-icon ${isOpen ? 'open' : 'closed'}`} alt="Toggle" />
        {title}
      </button>
      {isOpen && <div className="collapse-description">{children}</div>}
    </div>
  );
}

export default Collapse;