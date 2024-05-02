import React, { useState } from 'react';

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleCollapse}>{title}</button>
      {isOpen && <div>{children}</div>}
    </div>
  );
}

export default Collapse;
