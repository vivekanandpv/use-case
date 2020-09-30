import React from 'react';

const FormInput = (props) => {
  const handleInput = (e) => {
    props.handleChange(e.target.value);
  };

  return (
    <div className='form-label-group my-4'>
      <label>{props.label}</label>
      <input
        type={props.type}
        className='form-control'
        placeholder={props.placeholder}
        required={props.required}
        autoFocus={props.autoFocus}
        onInput={handleInput}
      />
    </div>
  );
};

export default FormInput;
