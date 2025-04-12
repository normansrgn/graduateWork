import React, { useState } from "react";


function CustomDropdown({ sortOrder, setSortOrder }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (eventKey) => {
    setSortOrder(eventKey);
    setIsOpen(false);
  };

  const options = [
    { eventKey: "none", label: "Без сортировки" },
    { eventKey: "asc", label: "По возрастанию" },
    { eventKey: "desc", label: "По убыванию" },
  ];

  const selectedLabel =
    options.find((option) => option.eventKey === sortOrder)?.label ||
    "Без сортировки";

  return (
    <div className="custom-dropdown">
      <div
        className={`sneaker__dropdown-toggle ${isOpen ? "show" : ""}`}
        onClick={handleToggle}
      >
        {selectedLabel}
        <span className={`arrow ${isOpen ? "open" : ""}`}>▼</span>
      </div>
      {isOpen && (
        <ul className="sneaker__dropdown-menu">
          {options.map((option) => (
            <li
              key={option.eventKey}
              className="sneaker__dropdown-item"
              onClick={() => handleSelect(option.eventKey)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CustomDropdown;