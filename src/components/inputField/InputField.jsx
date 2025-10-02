import { useState } from "react";

import './InputField.css';

export const InputField = ({ typeOfInput, label, htmlFor, id, name, type, }) => {

  const [activeInput, setActiveInput] = useState(false);

  const setterActiveInputTrue = () => {
    setActiveInput(true);
  };

  const setterActiveInputFalse = () => {
    setActiveInput(false);
  };

  return (
    typeOfInput === 'Field'

      ?
      <div
        className="input-field-wrapper"
        style={
          activeInput === true ? { borderBottom: '3px solid var(--primary-color-30)' } : { borderBottom: '1px solid var(--primary-color-40)' }}
      >
        <label
          htmlFor={htmlFor}
          style={activeInput === true ? { color: 'var(--primary-color-20)' } : { color: 'var(--primary-color-05)' }}
        >{label}
        </label>
        <input
          style={activeInput === true ? { outline: 'none' } : {}}
          type={type}
          id={id}
          name={name}
          onFocus={setterActiveInputTrue}
          onBlur={setterActiveInputFalse}
          required
        />
      </div>


      :
      <div
        className="text-area-field-wrapper"
        style={
          activeInput === true ? { borderBottom: '3px solid var(--primary-color-30)' } : { borderBottom: '1px solid var(--primary-color-40)' }}
      >
        <label
          htmlFor={htmlFor}
          style={activeInput === true ? { color: 'var(--primary-color-20)' } : { color: 'var(--primary-color-05)' }}
        >{label}
        </label>
        <textarea
          style={activeInput === true ? { outline: 'none' } : {}}
          id={id}
          name={name}
          onFocus={setterActiveInputTrue}
          onBlur={setterActiveInputFalse}
          required
        />
      </div>
  );
};
