import React, { useState } from 'react';
import './Sidebar.css';

const buttons = ['All', 'Created', 'Pending', 'Delivered'];

function Sidebar() {
  const [selected, setSelected] = useState('All');

  return (
    <aside className="sidebar">
      {buttons.map((button) => (
        <div
          key={button}
          className={selected == button ? 'button selected' : 'button'}
          onClick={() => {
            setSelected(button);
            console.log(`===Selected: ${button}===`);
          }}
        >
          {button}
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
