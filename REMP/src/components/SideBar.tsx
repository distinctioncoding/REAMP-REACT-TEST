import React, { useState } from 'react';

const buttons = ['All', 'Created', 'Pending', 'Delivered'] as const;
type ButtonType = typeof buttons[number];


function Sidebar() {
  const [selected, setSelected] = useState<ButtonType>('All');

  return (
    <aside className="w-[220px] bg-[#f6f6f6] p-3">
      {buttons.map((button) => (
        <div
          key={button}
          className={`px-2 py-2 mb-2 rounded cursor-pointer ${
            selected === button ? 'bg-[#E8ECF0] font-bold' : ''
          }`}
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
