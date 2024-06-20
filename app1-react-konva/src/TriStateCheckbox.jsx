import React, { useState } from 'react';

const TriStateCheckbox = () => {
  const [checkedState, setCheckedState] = useState('unchecked');

  const handleCheckboxChange = () => {
    if (checkedState === 'unchecked') {
      setCheckedState('checked');
    } else if (checkedState === 'checked') {
      setCheckedState('semichecked');
    } else {
      setCheckedState('unchecked');
    }
  };

  const renderCheckboxIcon = () => {
    if (checkedState === 'checked') {
      return <span>✓</span>;
    } else if (checkedState === 'semichecked') {
      return <span>☒</span>;
    } else {
      return <span>☐</span>;
    }
  };

  return (
    <label>
      <input
        type="checkbox"
        checked={checkedState === 'checked'}
        onChange={handleCheckboxChange}
      />
      {renderCheckboxIcon()}
    </label>
  );
};

export default TriStateCheckbox;
